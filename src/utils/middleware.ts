import { ApolloLink } from "@apollo/client";

export const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") ?? null,
    },
  }));

  return forward(operation);
});
