import React from "react";
import { useUser } from "../../../hooks";
import { isUserAdmin } from "../../../helpers";
import { Box } from "@mui/material";
import { Button } from "../../atoms";
import { useDispatch } from "react-redux";
import { deleteProduct, setSelectedProduct } from "../../../redux";
import { useNavigate } from "react-router-dom";

export const ProductCardActions = ({ product }) => {
  const { userData } = useUser();
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
};
