import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../hooks";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { LoadingWrapper, Text } from "../../atoms";

const Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80vh",
});

const StyledImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 5,
});

const Description = styled(Box)({
  display: "flex",
  marginBottom: 20,
  textAlign: "center",
});

export const SingleProduct = () => {
  const { id, category } = useParams();
  const { getData, data, loading } = useFetchData();

  useEffect(() => {
    getData(`/products/category/${category}/${id}`);
  }, [id, category, getData]);

  const { image, name, brand, description } = data?.product || {};

  return (
    <LoadingWrapper isLoading={loading}>
      <Container>
        <StyledImage src={image} alt={`${brand}-${name}`} />
        <Box>
          <Description>
            <Text variant="h4">product Name </Text>
            <Text variant="h4">{name}</Text>
          </Description>
          <Description>
            <Text variant="h4">product description </Text>
            <Text variant="h4">{description}</Text>
          </Description>
          <Description>
            <Text variant="h4">product brand </Text>
            <Text variant="h4">{brand}</Text>
          </Description>
        </Box>
      </Container>
    </LoadingWrapper>
  );
};
