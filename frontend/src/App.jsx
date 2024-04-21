import { Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
      </Route>
    </Routes>
  );
};

export default App;
