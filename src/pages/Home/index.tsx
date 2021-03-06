import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";
import toast from "react-hot-toast";

import accountantImg from "../../assets/accountant.svg";
import logoImg from "../../assets/logo.svg";
import googleIconImg from "../../assets/google-icon.svg";

import { ButtonAccess, Container } from "./styles";
import { FiLogIn } from "react-icons/fi";

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [dashboardCode, setDashboardCode] = useState("");

  async function handleCreateDashboard() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate("/dashboard/new");
  }

  async function handleJoinDashboard(event: FormEvent) {
    event.preventDefault();

    if (dashboardCode.trim() === "") {
      return;
    }

    await database
      .ref(`dashboards/${dashboardCode}`)
      .get()
      .then(() => {
        navigate(`/dashboard/${dashboardCode}`);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  return (
    <Container>
      <aside>
        <strong>Controle as suas finanças</strong>
        <p>Tenha controle do seu fluxo financeiro</p>
        <div className="illustration">
          <img
            src={accountantImg}
            alt="Ilustração de uma mulher usando calculadra"
          />
        </div>
      </aside>

      <main>
        <div className="main-content">
          <a href="/" target={"_self"}>
            <img src={logoImg} alt="dt-money web" />
          </a>

          <button onClick={handleCreateDashboard} className="create-dashboard">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie seu dashboard com o Google
          </button>

          <div className="separator">ou entre em um dashboard</div>

          <form onSubmit={handleJoinDashboard}>
            <input
              type="text"
              placeholder="Digite o código do dashboard"
              onChange={(event) => setDashboardCode(event.target.value)}
              value={dashboardCode}
            />
            <ButtonAccess type="submit">
              <FiLogIn aria-label="Acessar dashboard" />
              Acessar dashboard
            </ButtonAccess>
          </form>
        </div>
      </main>
    </Container>
  );
}
