import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./pages/error";
import { authMiddleware } from "./utils/middleware";
// needs to be bundled
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const httpLink = new HttpLink({ uri: process.env.REACT_APP_DEV_BACKEND });

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_DEV_BACKEND,
  cache: new InMemoryCache(),
  link: from([authMiddleware, httpLink]),
});

root.render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <Error error={error} resetErrorBoundary={resetErrorBoundary} />
      )}
      onReset={() => window.location.replace("/")}
    >
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ApolloProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
