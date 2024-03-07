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
import { useTranslation } from "react-i18next";

export const ProductCardActions = ({ product }) => {
  const handleEditClick = () => {
    navigate(`/products/${product._id}/edit`);
    dispatch(setSelectedProduct(product.product));
  };
  const { t } = useTranslation();

  const { userData } = useUser();
  const { cartItems } = useCart();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (isUserAdmin(userData)) {
    return (
      <Box>
        <Button variant="contained" color="primary" onClick={handleEditClick}>
          {t("edit")}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            dispatch(deleteProduct({ productId: product.product._id }));
          }}
        >
          {t("delete")}
        </Button>
      </Box>
    );
  }
  const productInCart = cartItems.find(
    (item) => item._id === product.product._id
  );
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
              dispatch(removeFromCart(product));
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
