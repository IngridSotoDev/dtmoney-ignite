import { FiMinusCircle, FiEdit } from "react-icons/fi";
import { useDashboard } from "../../hooks/useDashboard";
import { Container } from "./styles";

export function TransactionsTable() {
  const {
    transactions,
    titleDashboard,
    handleRemoveTransaction,
    handleEditTransaction,
  } = useDashboard();

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
                <td>{transaction.title}</td>
                <td className={transaction.type}>
                  {transaction.type === "deposit" ? "" : "-"}
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
                <td className="actions">
                  {/* <button onClick={() => handleEditTransaction(transaction.id)}>
                    <FiEdit className="edit" aria-label="Editar item" />
                  </button> */}

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
