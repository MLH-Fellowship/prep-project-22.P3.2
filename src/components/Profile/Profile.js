import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import "./Profile.css"


export default function Profile() {
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const navigate = useNavigate();

    async function handleLogout() {
        setError('')

        try {
            await logout()
            navigate("/login")
        } catch {
            setError('Failed to log out')
        }
    }
    return (
        <div className="profile mt-4">
            <Card>
                <Card.Body>
                    <h4 className="text-center mb-4">Your profile</h4>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>Email:</strong>{currentUser.email}

                </Card.Body>

                <div className='w-100 text-center mt-2'>
                    <Button variant="link" onClick={handleLogout}>Log out</Button>
                </div>

            </Card>
        </div>
    )
}
