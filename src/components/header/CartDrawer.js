import { Box, Drawer, styled } from "@mui/material";
import React from "react";
import { LoadingWrapper, Text } from "../atoms";

const StyledCartItem = styled(Box)(() => ({
  width: "400px",
  display: "flex",
  alignItems: "center",
  padding: "5px 10px",
  marginBottom: 20,
}));

const StyledImage = styled("img")(() => ({
  width: 70,
  height: 70,
  objectFit: "cover",
  borderRadius: 5,
}));

export const CartDrawer = ({
  isCartDrawerOpen,
  setIsCartDrawerOpen,
  cartItems,
}) => {
  return (
    <Drawer
      open={isCartDrawerOpen}
      onClose={() => setIsCartDrawerOpen(false)}
      anchor="right"
    >
      <LoadingWrapper isLoading={false}>
        {cartItems.map((item) => {
          console.log("cartItems", item);
          const { name, brand, price, image, quantity } = item;
          return (
            <StyledCartItem>
              <StyledImage src={image} alt={`${brand}- ${name}`} />
              <Box
                sx={{
                  paddingLeft: 5,
                }}
              >
                <Text>{name}</Text>
                <Text>Quantity: {quantity}</Text>
                <Text>Total Price: {quantity * price}</Text>
              </Box>
            </StyledCartItem>
          );
        })}
      </LoadingWrapper>
    </Drawer>
  );
};
