import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Dashboard } from "./pages/Dashboard";
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
        
        <Toaster position="top-right" reverseOrder={true} />
        <GlobalStyle />
      </AuthContextProvider>
    </BrowserRouter>
  );
}
