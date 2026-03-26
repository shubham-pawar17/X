import { Navigate } from "react-router-dom"

interface Props {
  children: React.ReactNode
}

function ProtectedRoute({ children }: Props) {
  const isLoggedIn = localStorage.getItem("isLoggedIn")

  if (!isLoggedIn) {
    return <Navigate to="/" />
  }

  return children
}

export default ProtectedRoute