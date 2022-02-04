import { useEffect } from "react";
import { api } from "../../api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("http://localhost:3000/api/transactions")
      .then(response => console.log(response.data))
  }, []);

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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel do apartamento</td>
            <td className="withdraw">- R$ 1.200,00</td>
            <td>Casa</td>
            <td>27/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
