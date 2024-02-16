import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, ProductFormPage, SignUpPage } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { useSelector } from "react-redux";
import { isUserAdmin } from "../helpers";
import { useUser } from "../hooks/useUser";

export const RoutesComponent = () => {
  const { userData } = useUser();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/products/add"
        element={
          <ProtectedRoute hasAccess={isUserAdmin(userData)}>
            <ProductFormPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products/:id/edit"
        element={
          <ProtectedRoute hasAccess={isUserAdmin(userData)}>
            <ProductFormPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
