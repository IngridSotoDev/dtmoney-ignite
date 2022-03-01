import { useState } from "react";
import Modal from "react-modal";
import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { NewTransactionModal } from "../NewTransactionModal";
import { Container } from "./styles";
import { ButtonNewTransaction } from "../ButtonNewTransaction";


Modal.setAppElement("#root");

export function Transactions() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <Container>
      <Summary />

      <ButtonNewTransaction onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <TransactionsTable />
      
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </Container>
  );
}
