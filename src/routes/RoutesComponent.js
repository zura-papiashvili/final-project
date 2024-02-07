import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, ProductFormPage, SignUpPage } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/products/add"
        element={
          <ProtectedRoute hasAccess={true}>
            <ProductFormPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
