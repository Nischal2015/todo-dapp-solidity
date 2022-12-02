import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import App from "./App";
import { theme, TodoProvider, TransactionProvider } from "./context";
import "./index.css";
import React from "react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <TransactionProvider>
      <TodoProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </TodoProvider>
    </TransactionProvider>
  </ThemeProvider>
);
