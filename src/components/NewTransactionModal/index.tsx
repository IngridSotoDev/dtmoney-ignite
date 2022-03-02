import { FormEvent, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";
import { toast } from "react-hot-toast";
import { FiArrowDownCircle, FiArrowUpCircle, FiX } from "react-icons/fi";
import { database } from "../../services/firebase";
import { useAuth } from "../../hooks/useAuth";
import { Container, TransactionTyleContainer, RadioBox } from "./styles";

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
      toast.error("Favor preencher todos os campos!");
      return;
    }

    if (!user) {
      signInWithGoogle();
      toast.error("Você precisa estar logado!");
    }

    const createdAt = `${new Date()}`;

    const transaction = {
      title,
      amount,
      category,
      type,
      createdAt,
    };

    await database
      .ref(`dashboards/${id}/transactions`)
      .push(transaction)
      .then(() => {
        toast.success("Transação criada com sucesso!");
      });

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
        <FiX aria-label="Fechar modal" />
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
            <FiArrowUpCircle aria-label="Entrada" />
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
            <FiArrowDownCircle aria-label="Saída" />
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
