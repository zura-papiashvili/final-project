import { Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, SignUpPage } from "../pages";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};
