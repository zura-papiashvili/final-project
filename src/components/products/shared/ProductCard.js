import { Box, Card, Grid, styled } from "@mui/material";
import React from "react";
import { Text } from "../../atoms";

const StyledImage = styled("img")(() => ({
  objectFit: "cover",
  width: "100%",
  height: "270px",
}));
const StyledInfoContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "20px 20px",
}));

export const ProductCard = ({ product }) => {
  const { image, name, price, _id, brand, category } = product;
  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <Card
        sx={{
          borderRadius: 8,
        }}
      >
        <StyledImage src={image} alt={`${brand}-${name}`} />
        <StyledInfoContainer>
          <Text>{name}</Text>
          <Text>${price}</Text>
        </StyledInfoContainer>
      </Card>
    </Grid>
  );
};
