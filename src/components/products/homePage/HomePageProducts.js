import React from "react";
import { LoadingWrapper } from "../../atoms";
import { GridContainer, ProductCard } from "../shared";
import { useSelector } from "react-redux";
import { useProduct } from "../../../hooks";

export const HomePageProducts = () => {
  const { homePageProducts, isLoading } = useProduct();
  return (
    <LoadingWrapper isLoading={isLoading}>
      <GridContainer>
        {homePageProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </GridContainer>
    </LoadingWrapper>
  );
};
