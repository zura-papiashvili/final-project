import { MenuItem, Select } from "@mui/material";
import React from "react";

export const Sort = ({ value, changeSort }) => {
  return (
    <Select
      value={value || "price,desc"}
      onChange={(e) => {
        changeSort("sort", e.target.value);
      }}
      sx={{ width: "200px" }}
    >
      <MenuItem value="price,asc">Price: Low to High</MenuItem>
      <MenuItem value="price,desc">Price: High to Low</MenuItem>
      <MenuItem value="name,asc">Name: A to Z</MenuItem>
      <MenuItem value="name,desc">Name: Z to A</MenuItem>
    </Select>
  );
};
