import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, hasAccess }) => {
  if (hasAccess) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
