import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../context/AuthContext"


const AdminRoute = () => {
  const { authState } = useAuth()

  if (!authState.isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (authState.user?.role !== 'admin') {
    console.warn("Acesso negado: Rota apenas para administradores.")
    return <Navigate to="/login" replace />
  }
  return <Outlet />; 
}

export default AdminRoute;