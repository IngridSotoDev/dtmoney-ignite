import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Transactions } from "../../components/Transactions";

type DashboardParams = {
  id: string;
};

export function Dashboard() {
  const { id } = useParams<DashboardParams>();

  return (
    <>
      <Header code={id} />

      <Transactions />
    </>
  );
}
