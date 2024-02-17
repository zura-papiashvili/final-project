import { useSelector } from "react-redux";

export const useCart = () => {
  const isLoading = useSelector((state) => state.cart.loading);
  const error = useSelector((state) => state.cart.error);
  const cartItems = useSelector((state) => state.cart.cartItems);
  return { isLoading, error, cartItems };
};
