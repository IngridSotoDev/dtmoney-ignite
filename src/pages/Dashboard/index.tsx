import { useState } from "react";
import Modal from "react-modal";
import { Header } from "../../components/Header";
import { Transactions } from "../../components/Transactions";
import { NewTransactionModal } from "../../components/NewTransactionModal";

Modal.setAppElement('#root')

export function Dashboard() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Transactions />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
