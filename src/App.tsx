import { Route, Routes } from "react-router";
import "./scss/style.scss";
import Landing from "./pages/landing";
import Login from "./pages/login";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/error";

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <Error error={error} resetErrorBoundary={resetErrorBoundary} />
      )}
      onReset={() => window.location.replace("/")}
    >
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
