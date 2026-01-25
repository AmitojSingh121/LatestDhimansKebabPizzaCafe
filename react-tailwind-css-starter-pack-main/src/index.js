import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import UserContext from "./Context/UserContext";
import {Provider} from 'react-redux'
import {store} from './Redux/Store.js'

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store = {store}>
<UserContext>
    <App />
  </UserContext>
  </Provider>
);
