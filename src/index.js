import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import AppRouter from "./AppRouter";
import Navbar from "./components/Navbar/Navbar"
import AuthProvider from "./context/AuthContext";

ReactDOM.render(
  <AuthProvider>
    <Router>
      <React.StrictMode>
        <Navbar />
        <AppRouter />
      </React.StrictMode>
    </Router>
  </AuthProvider>,
  document.getElementById("root")
);
