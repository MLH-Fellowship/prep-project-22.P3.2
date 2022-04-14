import SignupPage from "./pages/SignupPage";
import App from "./App"
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function AppRouter() {
    return (
        <>
            <Routes>

                <Route path="/" element={<App />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />

            </Routes>

        </>
    );
}

export default AppRouter;