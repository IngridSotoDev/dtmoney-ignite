import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "react-modal";
import { FiArrowDownCircle, FiArrowUpCircle, FiX } from "react-icons/fi";
import { database } from "../../services/firebase";
import { Container, TransactionTyleContainer, RadioBox } from "./styles";
import { useDashboard } from "../../hooks/useDashboard";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function EditTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { id, transactionEdit } = useDashboard();
  // const { user, signInWithGoogle } = useAuth();
  const [title, setTitle] = useState(transactionEdit?.title);
  const [amount, setAmount] = useState(transactionEdit?.amount);
  const [category, setCategory] = useState(transactionEdit?.category);
  const [type, setType] = useState(transactionEdit?.type);
console.log(type);

  async function handleEditTransaction(event: FormEvent) {
    event.preventDefault();
    
    const transaction = {
      title,
      amount,
      category,
      type,
      createdAt: transactionEdit?.createdAt,
    };

    await database
      .ref(`dashboards/${id}/transactions/${transactionEdit?.id}`)
      .update(transaction)
      .then(() => {
        toast.success("Transação criada com sucesso!");
      });

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

      <Container onSubmit={handleEditTransaction}>
        <h2>Editar Transação</h2>

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
