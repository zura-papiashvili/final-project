import { Box, Drawer, styled } from "@mui/material";
import React from "react";
import { Button, LoadingWrapper, Text } from "../atoms";
import { useCart, useUser } from "../../hooks";
import { useDispatch } from "react-redux";
import { clearCart, saveCart } from "../../redux";

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

const StyledButtonContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
}));

export const CartDrawer = ({
  isCartDrawerOpen,
  setIsCartDrawerOpen,
  cartItems,
}) => {
  const { userData } = useUser();
  const { isLoading } = useCart();
  const dispatch = useDispatch();
  return (
    <Drawer
      open={isCartDrawerOpen}
      onClose={() => setIsCartDrawerOpen(false)}
      anchor="right"
    >
      <LoadingWrapper isLoading={isLoading}>
        {cartItems.map((item) => {
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
      <StyledButtonContainer>
        <Button
          onClick={() => {
            dispatch(clearCart());
            setIsCartDrawerOpen(false);
          }}
        >
          Clear Cart
        </Button>
        {Boolean(userData) && (
          <Button
            onClick={() => {
              dispatch(saveCart({ userId: userData._id, cartItems }));
            }}
          >
            Save Cart
          </Button>
        )}
      </StyledButtonContainer>
    </Drawer>
  );
};
