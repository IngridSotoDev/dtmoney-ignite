import { useState } from "react";
import Modal from "react-modal";
import { Header } from "../../components/Header";
import { Transactions } from "../../components/Transactions";
import { NewTransactionModal } from "../../components/NewTransactionModal";
import { useParams } from "react-router-dom";

Modal.setAppElement("#root");

type DashboardParams = {
  id: string;
};

export function Dashboard() {

  const { id } = useParams<DashboardParams>();
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
      <Header code={id} onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Transactions />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
