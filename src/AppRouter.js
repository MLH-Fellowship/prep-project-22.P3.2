import SignupPage from "./pages/SignupPage";
import App from "./App"
import "./App.css";
import { Routes, Route } from "react-router-dom";

function AppRouter() {
    return (
        <>
            <Routes>

                <Route path="/" element={<App />} />
                <Route path="/signup" element={<SignupPage />} />

            </Routes>

        </>
    );
}

export default AppRouter;