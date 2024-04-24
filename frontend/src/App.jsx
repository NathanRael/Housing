import { Route, Routes } from "react-router-dom";
import Agency from "./pages/Agency";
import AppLayout from "./pages/AppLayout";
import Client from "./pages/Client";
import Dashboard from "./pages/Dashboard";
import Housing from "./pages/Housing";
import Payement from "./pages/Payement";
import Login from "./pages/_auth/Login";
import Signup from "./pages/_auth/Signup";
import ClientNew from "./pages/ClientNew";
import HousingNew from "./pages/HousingNew";

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/housing" element={<Housing />} />
        <Route path="/housing/new" element={<HousingNew />} />
        <Route path="/client" element={<Client />} />
        <Route path="/client/new" element={<ClientNew />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/payment" element={<Payement />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
