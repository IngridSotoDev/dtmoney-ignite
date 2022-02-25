import {Link, useNavigate} from 'react-router-dom'
import { Button } from "../../components/Button";
import accountantImg from "../../assets/accountant.svg";
import logoImg from "../../assets/logo.svg";

import { Container } from "./styles";
import { FormEvent, useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

export function NewDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate()

  const [newDashboard, setNewDashboard] = useState("");

  async function handleCreateDashboard(event: FormEvent) {
    event.preventDefault();

    if (newDashboard.trim() === "") {
      return;
    }

    const dashboardRef = database.ref("dashboards");

    const firebaseDashboard = await dashboardRef.push({
      title: newDashboard,
      authorId: user?.id
    });

    navigate(`/dashboard/${firebaseDashboard.key}`)

  }


  return (
    <Container>
      <aside>
        <strong>Controle as suas finanças</strong>
        <p>Tenha controle do seu fluxo de caixa</p>
        <div className="illustration">
          <img
            src={accountantImg}
            alt="Ilustração de uma mulher usando calculadra"
          />
          <span>
            <a
              href="https://iconscout.com/illustrations/accountant"
              target="_blank"
            >
              Accountant Illustration
            </a>
            <span> by </span>
            <a
              href="https://iconscout.com/contributors/delesign"
              target="_blank"
            >
              Delesign Graphics
            </a>
          </span>
        </div>
      </aside>

      <main>
        <div className="main-content">
          <img src={logoImg} alt="dt-money web" />
          <h2>Criar um dashboard</h2>

          <form>
            <input
              type="text"
              placeholder="Nome do Dashboard"
            />
            <Button type="submit">Criar Dashboard</Button>
          </form>
          <p>Quer acessar um dashboard existente? <Link to={"/"}>Clique aqui</Link></p>
        </div>
      </main>
    </Container>
  );
}
