import logoImg from "../../assets/logo.svg";
import copyImg from "../../assets/copy.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
  code?: string;
}

export function Header({ onOpenNewTransactionModal, code }: HeaderProps) {

  function copyDashboardCodeToClipboard() {
    navigator.clipboard.writeText(code || '')
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />

        <button className="copy-dashboard-id" onClick={copyDashboardCodeToClipboard}>
          <div>
            <img src={copyImg} alt="Copiar código do dashboard" />
          </div>
          <span>#{code}</span>
        </button>

        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
      </Content>
    </Container>
  );
}
