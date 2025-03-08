import { Navigate } from "react-router-dom";

const isAuthenticated = () => !!localStorage.getItem("auth");

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
