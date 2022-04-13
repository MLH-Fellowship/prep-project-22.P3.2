import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import SignupPage from "./pages/SignupPage";


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
