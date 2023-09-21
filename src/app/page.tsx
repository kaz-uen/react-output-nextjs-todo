import "./index.css";
import React from "react";
import App from "./app";
import ListTodo from "../components/ListTodo";

export default function Home() {
  return (
    <React.StrictMode>
      <App>
        <ListTodo />
      </App>
    </React.StrictMode>
  );
}
