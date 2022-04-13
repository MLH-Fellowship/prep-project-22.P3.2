import Signup from "../components/Signup/Signup"
import AuthProvider from "../context/AuthContext";
import { Container } from "react-bootstrap";

function SignupPage() {
    return (
        <AuthProvider>
            <Container className="d-flex align-items-cemter justify" style={{ minHeight: "100vh" }}>
                <div className='W-300' style={{ maxWidth: "400px" }}>
                    <Signup />
                </div>
            </Container>
        </AuthProvider>
    );
}

export default SignupPage;