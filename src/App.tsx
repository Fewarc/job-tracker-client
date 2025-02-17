import { Route, Routes } from "react-router";
import "./scss/style.scss";
import Landing from "./pages/landing";

function App() {
  return (
    <Routes>
      <Route index element={<Landing />} />
    </Routes>
  );
}

export default App;
