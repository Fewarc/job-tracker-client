import { Route, Routes } from "react-router";
import "./scss/style.scss";
import Login from "./pages/login";
import Landing from "./pages/landing";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
