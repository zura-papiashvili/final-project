import React, { useEffect } from "react";
import { LoadingWrapper } from "../../atoms";
import { Box, styled } from "@mui/material";
import { Sort } from "./Sort";
import { Paginate } from "./Paginate";
import { GridContainer, ProductCard } from "../shared";
import { useDispatch } from "react-redux";
import { fetchCategoryProducts } from "../../../redux";
import { useParams } from "react-router-dom";
import { useProduct, useQueryParams } from "../../../hooks";
const Container = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
}));

export const CategoryProductList = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { categoryProducts, isLoading, totalPages } = useProduct();
  const { value: sort, changeQueryValue: changeSort } = useQueryParams("sort");
  const { value: page, changeQueryValue: changePage } = useQueryParams("page");
  useEffect(() => {
    dispatch(
      fetchCategoryProducts({
        categoryName: category,
        queryUrl: `?size=1&sort=${sort},desc&page=${page}`,
      })
    );
  }, [sort, page, category, dispatch]);

  return (
    <LoadingWrapper isLoading={isLoading}>
      <Container>
        <Sort value={sort} changeSort={changeSort} />
        <GridContainer>
          {categoryProducts.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </GridContainer>
        <Paginate
          totalPages={totalPages}
          currentPage={page}
          changePage={changePage}
        />
      </Container>
    </LoadingWrapper>
  );
};
