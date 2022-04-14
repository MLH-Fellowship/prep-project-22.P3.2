import Login from "../components/Login/Login"
import AuthProvider from "../context/AuthContext";
import { Container } from "react-bootstrap";

function LoginPage() {
    return (
        <AuthProvider>
            <Container className="d-flex align-items-cemter justify" style={{ minHeight: "100vh" }}>
                <div className='W-300' style={{ maxWidth: "400px" }}>
                    <Login />
                </div>
            </Container>
        </AuthProvider>
    );
}

export default LoginPage;