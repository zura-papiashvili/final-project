import React from "react";
import { useSelector } from "react-redux";

export const useProduct = () => {
  const homePageProducts = useSelector(
    (state) => state.product.homePageProducts
  );
  const isLoading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  return { homePageProducts, isLoading, error };
};
