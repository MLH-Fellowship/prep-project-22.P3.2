import React from 'react'
import Profile from '../components/Profile/Profile'
import AuthProvider from "../context/AuthContext";
import { Container } from 'react-bootstrap'


export default function ProfilePage() {

    return (
        <AuthProvider>
            <Container className="d-flex justify-content-center" style={{ minHeight: "100vh" }}>
                <div className='W-300' style={{ maxWidth: "400px" }}>
                    <Profile />
                </div>
            </Container>
        </AuthProvider>

    )
}
