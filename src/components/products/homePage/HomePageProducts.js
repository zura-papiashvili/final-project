import React from "react";
import { LoadingWrapper } from "../../atoms";
import { GridContainer, ProductCard } from "../shared";
import { useProduct, useUser } from "../../../hooks";
import { Link } from "../../atoms";
import { Box, styled } from "@mui/system";

const StyledInfoContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "20px 20px",
  textAlign: "center",
}));

export const HomePageProducts = () => {
  const { userData } = useUser();
  const { homePageProducts, isLoading } = useProduct();
  return (
    <>
      {userData && userData.isAdmin && (
        <Link to="/products/add">
          <StyledInfoContainer>Add Product</StyledInfoContainer>
        </Link>
      )}

      <LoadingWrapper isLoading={isLoading}>
        <GridContainer>
          {homePageProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </GridContainer>
      </LoadingWrapper>
    </>
  );
};
