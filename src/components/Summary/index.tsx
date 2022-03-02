import { useParams } from "react-router-dom";
import {
  FiArrowDownCircle,
  FiArrowUpCircle,
  FiDollarSign,
} from "react-icons/fi";
import { useDashboard } from "../../hooks/useDashboard";
import { Container } from "./styles";

export function Summary() {

  const { transactions } = useDashboard();
  const summary = transactions.reduce((acc, transaction) => {

    if (transaction.type === "deposit") {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <FiArrowUpCircle className="entradas" aria-label="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <FiArrowDownCircle className="saidas" aria-label="Saídas" />
        </header>
        <strong>
          -{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <FiDollarSign aria-label="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}
