import React from "react";
import { useCart, useUser } from "../../../hooks";
import { isUserAdmin } from "../../../helpers";
import { Box } from "@mui/material";
import { Button, Text } from "../../atoms";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteProduct,
  removeFromCart,
  setSelectedProduct,
} from "../../../redux";
import { useNavigate } from "react-router-dom";

export const ProductCardActions = ({ product }) => {
  const { userData } = useUser();
  const { cartItems } = useCart();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (isUserAdmin(userData)) {
    return (
      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            navigate(`/products/${product._id}/edit`);
            dispatch(setSelectedProduct(product));
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            dispatch(deleteProduct({ productId: product._id }));
          }}
        >
          Delete
        </Button>
      </Box>
    );
  }

  const productInCart = cartItems.find((item) => item._id === product._id);

  return (
    <Box>
      {!productInCart ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(addToCart(product));
          }}
        >
          Add to Cart
        </Button>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              dispatch(removeFromCart(product._id));
            }}
          >
            -
          </Button>
          <Text>{productInCart.quantity}</Text>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(addToCart(product));
            }}
          >
            +
          </Button>
        </Box>
      )}
    </Box>
  );
};
