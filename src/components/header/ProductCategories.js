import React from "react";
import { useProduct } from "../../hooks";
import { List, ListItem, styled } from "@mui/material";
import { Link, Text } from "../atoms";
const StyledListItem = styled(ListItem)(() => ({
  padding: "5px 0 3px 15px",
  margin: "0px",
}));

export const ProductCategories = () => {
  const { productCategories } = useProduct();
  return (
    <List
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 0,
        "& li": {
          listStyle: "none",
          padding: "5px 0",
        },
      }}
    >
      {productCategories.map((category) => {
        const { _id, name } = category;
        return (
          <Link
            to={`/products/categories/${name}?sort=price,desc&page=1`}
            key={_id}
          >
            <StyledListItem>
              <Text
                sx={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#FF9900",
                }}
              >
                {name}
              </Text>
            </StyledListItem>
          </Link>
        );
      })}
    </List>
  );
};
