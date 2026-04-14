import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import UserContext from "./Context/UserContext";
import {Provider} from 'react-redux'
import {store} from './Redux/Store.js'
import { BrowserRouter } from 'react-router-dom';  // ← ADD THIS
import "./i18n.js";   // 👈 add this line

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store}>
    <BrowserRouter>
<UserContext>
    <App />
  </UserContext>
  </BrowserRouter>
  </Provider>
);
