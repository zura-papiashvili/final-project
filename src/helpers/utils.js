import { jwtDecode } from "jwt-decode";

export const chackTokenValidity = async (token) => {
  const expiratioDate = jwtDecode(token).exp;
  const isExpired = expiratioDate * 1000 < new Date().getTime();
  return isExpired;
};

export const isUserAdmin = (user) => {
  if (!user) return false;
  return user.role.includes("admin");
};

export const getUserInitials = (user) => {
  if (!user) return "";
  return `${user.firstName.charAt(0).toUpperCase()}${user.lastName
    .charAt(0)
    .toUpperCase()}`;
};
