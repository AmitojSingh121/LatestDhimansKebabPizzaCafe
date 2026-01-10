import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import UserContext from "./Context/UserContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <UserContext>
    <App />
  </UserContext>
);
