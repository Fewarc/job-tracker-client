import { Route, Routes } from "react-router";
import "./scss/style.scss";
import Landing from "./pages/landing";
import Login from "./pages/login";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
