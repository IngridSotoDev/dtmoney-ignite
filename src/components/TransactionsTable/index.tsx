import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { database } from "../../services/firebase";
import { FiMinusCircle, FiEdit } from "react-icons/fi";
import { Container } from "./styles";

type FirebaseTransactions = Record<
  string,
  {
    author: {
      name: string;
    };
    content: {
      title: string;
      type: string;
      amount: number;
      category: string;
      createdAt: string;
    };
  }
>;

type Transaction = {
  id: string;
  author: {
    name: string;
  };
  content: {
    title: string;
    type: string;
    amount: number;
    category: string;
    createdAt: string;
  };
};

type DashboardParams = {
  id: string;
};

export function TransactionsTable() {
  const { id } = useParams<DashboardParams>();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [titleDashboard, setTitleDashboard] = useState("");

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
            content: value.content,
            author: value.author,
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
      .get()
      .then((response) => {
        return response.val();
      });

    console.log(transaction.content + transactionId);
  }

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.content.title}</td>
                <td className={transaction.content.type}>
                  {transaction.content.type === "deposit" ? "" : "-"}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.content.amount)}
                </td>
                <td>{transaction.content.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.content.createdAt)
                  )}
                </td>
                <td className="actions">
                  <button onClick={() => handleEditTransaction(transaction.id)}>
                    <FiEdit className="edit" aria-label="Editar item" />
                  </button>

                  <button
                    onClick={() => handleRemoveTransaction(transaction.id)}
                  >
                    <FiMinusCircle
                      className="delete"
                      aria-label="Excluir item"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>{titleDashboard}</p>
    </Container>
  );
}
