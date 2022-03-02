import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { database } from "../services/firebase";

interface Transaction {
  id: string;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

type FirebaseTransactions = Record<
  string,
  {
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
  }
>;

type DashboardParams = {
  id: string;
};

export function useDashboard() {
  const { id } = useParams<DashboardParams>();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [titleDashboard, setTitleDashboard] = useState("");
  const [transactionEdit, setTransactionEdit] = useState<Transaction>();

  useEffect(() => {
    const dashboardRef = database.ref(`dashboards/${id}`);

    dashboardRef.on("value", (dashboard) => {
      const databaseTransaction = dashboard.val();
      setTitleDashboard(databaseTransaction.title);

      const firebaseTransactions: FirebaseTransactions =
        databaseTransaction.transactions || {};

      const parsedTransaction = Object.entries(firebaseTransactions).map(
        ([key, value]) => {
          return {
            id: key,
            title: value.title,
            amount: value.amount,
            category: value.category,
            type: value.type,
            createdAt: value.createdAt,
          };
        }
      );

      setTransactions(parsedTransaction);
    });
  }, [id]);

  async function handleRemoveTransaction(transactionId: string) {
    await database
      .ref(`/dashboards/${id}/transactions/${transactionId}`)
      .remove()
      .then(() => {
        toast.success("Transação removida!");
      });
  }

  async function handleEditTransaction(transactionId: string) {
    const transaction = await database
      .ref(`/dashboards/${id}/transactions/${transactionId}`)
      .get();

    setTransactionEdit({
      ...transaction.val(),
      id: transactionId,
    });
    console.log(transactionEdit);
  }

  return {
    transactions,
    titleDashboard,
    handleRemoveTransaction,
    handleEditTransaction,
    id,
    transactionEdit
  };
}
