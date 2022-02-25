import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Dashboard } from "./pages/Dashboard";
// import { TransactionsProvider } from "./hooks/useTransactions";
import { Home } from "./pages/Home";
import { NewDashboard } from "./pages/NewDashboard";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/new" element={<NewDashboard />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
        </Routes>

        <GlobalStyle />
      </AuthContextProvider>
    </BrowserRouter>
  );
}
