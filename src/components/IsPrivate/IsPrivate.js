import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function IsPrivate({ children }) {
    const {currentUser} = useAuth()

    console.log(currentUser)
    if (!currentUser) {
        return (

            <Navigate to="/login" />

        )
    }
    return children;
}

export default IsPrivate;