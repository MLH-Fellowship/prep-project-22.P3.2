import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import AppRouter from "./AppRouter";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
