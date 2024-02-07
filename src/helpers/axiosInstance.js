import axios from "axios";
import { chackTokenValidity } from "./utils";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3001",
});

axiosInstance.interceptors.request.use(async (req) => {
  const token = localStorage.getItem("token");
  const refreshToken = localStorage.getItem("refreshToken");
  if (!token && !refreshToken) return req;
  const isExpired = await chackTokenValidity(token);
  if (!isExpired) {
    req.headers.Authorization = `Bearer ${token}`;
    return req;
  }
  const { data } = await axios.post("http://localhost:3001/users/refresh", {
    refresh_token: refreshToken,
  });
  const newToken = data.token;
  localStorage.setItem("token", newToken);
  req.headers.Authorization = `Bearer ${newToken}`;
  return req;
});
