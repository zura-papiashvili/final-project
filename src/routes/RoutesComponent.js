import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, ProductFormPage, SignUpPage } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { useSelector } from "react-redux";
import { isUserAdmin } from "../helpers";

export const RoutesComponent = () => {
  const user = useSelector((state) => state.user.userData);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route
        path="/products/add"
        element={
          <ProtectedRoute hasAccess={isUserAdmin(user)}>
            <ProductFormPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
