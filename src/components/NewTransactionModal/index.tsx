import { FormEvent, useState } from "react";
import Modal from "react-modal";
// import { useTransactions } from "../../hooks/useTransactions";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { Container, TransactionTyleContainer, RadioBox } from "./styles";
// import { transitions } from "polished";
import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

type DashboardParams = {
  id: string;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { id } = useParams<DashboardParams>();
  const { user, signInWithGoogle } = useAuth();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    if (
      title.trim() === "" ||
      amount === 0 ||
      category.trim() === "" ||
      type.trim() === ""
    ) {
      return;
    }

    if (!user) {
      signInWithGoogle();
      throw new Error("You must be logged in!");
    }

    const createdAt = `${new Date()}`

    const transaction = {
      content: {
        title,
        amount,
        category,
        type,
        createdAt
      },
      author: {
        name: user.name,
      },
    };
    console.log(transaction);
    
    await database.ref(`dashboards/${id}/transactions`).push(transaction);

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          type="number"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTyleContainer>
          <RadioBox
            type="button"
            isActive={type === "deposit"}
            activeColor="green"
            onClick={() => {
              setType("deposit");
            }}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            isActive={type === "withdraw"}
            activeColor="red"
            onClick={() => {
              setType("withdraw");
            }}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTyleContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
