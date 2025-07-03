import { Navigate, Outlet } from "react-router-dom"

export const ProtectedRoute = ({ user, loading, redirectTo, children }) => {
    // Mostrar loading mientras se verifica la sesión
    if (loading) return <div>Cargando...</div>
    
    // Redirigir si no hay usuario
    if (user == null) return <Navigate replace to={redirectTo} />
    
    return children ? children : <Outlet />
}