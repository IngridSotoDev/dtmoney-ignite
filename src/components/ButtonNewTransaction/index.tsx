import { FiPlus } from "react-icons/fi";
import { Button } from "./style";

interface ButtonNewTransactionProps {
  onOpenNewTransactionModal: () => void;
}

export function ButtonNewTransaction({
  onOpenNewTransactionModal,
}: ButtonNewTransactionProps) {
  return (
    <Button type="button" onClick={onOpenNewTransactionModal}>
      <FiPlus aria-label="Adicionar Nova Transação" />
      <span>Nova Transação</span>
    </Button>
  );
}
