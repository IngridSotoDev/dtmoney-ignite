import toast from "react-hot-toast";
import { FiCopy, FiCornerLeftUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  code?: string;
}

export function Header({ code }: HeaderProps) {
  function copyDashboardCodeToClipboard() {
    navigator.clipboard.writeText(code || "").then(() => {
      toast.success("Copiado para a área de transferência!");
    });
  }

  return (
    <Container>
      <Content>
        <Link to={"/"}>
          <img src={logoImg} alt="dtmoney" />
        </Link>

        <div>
          <button onClick={copyDashboardCodeToClipboard}>
            <div>
              <FiCopy aria-label="Copiar código do dashboard" />
            </div>
            <span>#{code}</span>
          </button>

          <div className="text-id-dashboard">
            <FiCornerLeftUp />
            <span>ID Dashboard</span>
          </div>
        </div>
      </Content>
    </Container>
  );
}
