import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";

import { Button } from "../../components/Button";
import accountantImg from "../../assets/accountant.svg";
import logoImg from "../../assets/logo.svg";
import googleIconImg from "../../assets/google-icon.svg";

import { Container } from "./styles";

export function Home() {
  const navigate = useNavigate();
  const { user, signInWithGoogle } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  async function handleCreateDashboard() {
    if (!user) {
      await signInWithGoogle();
    }

    navigate("/dashboard/new");
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room does not exists.");
      return;
    }

    if (roomRef.val().endedAt) {
      alert("Room already closed.");
      return;
    }

    // navigate(`/rooms/${roomCode}`);
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
          <a href="/">
            <img src={logoImg} alt="dt-money web" />
          </a>

          <button onClick={handleCreateDashboard} className="create-painel">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie seu dashboard com o Google
          </button>

          <div className="separator">ou entre em um dashboard</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => setRoomCode(event.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </Container>
  );
}
