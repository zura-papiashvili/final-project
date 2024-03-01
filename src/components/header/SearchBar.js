import React, { useEffect, useState } from "react";
import { Link, Loading, Text } from "../atoms";
import { Autocomplete, Box, TextField, styled } from "@mui/material";
import { useDebounce, useFetchData } from "../../hooks";
import { useTranslation } from "react-i18next";

const StyledImage = styled("img")(() => ({
  width: 50,
  height: 50,
  objectFit: "cover",
}));

export const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(500, searchValue);
  const { getData, loading, data, setState } = useFetchData();
  const { products } = data || [];
  const { t } = useTranslation();

  useEffect(() => {
    if (!debouncedSearch) {
      setState((prev) => ({ ...prev, data: null }));
      return;
    }
    getData(`/products?search?name=${debouncedSearch}`);
  }, [debouncedSearch, getData]);
  return (
    <Autocomplete
      freeSolo
      disableClearable
      sx={{ width: 300 }}
      loading={loading}
      loadingText={<Loading size={50} />}
      options={products || []}
      getOptionLabel={(option) => option.name}
      renderOption={(_, option) => {
        const { category, _id, name, brand, price, image } = option;
        return (
          <Link to={`/products/categories/${category}/${_id}`}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "5px 0",
              }}
            >
              <StyledImage src={image} alt={`${category}-${name}`} />
              <Text>{name}</Text>
              <Text>{price}</Text>
            </Box>
          </Link>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            label={t("search")}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            sx={{
              input: {
                color: "#FF9900",
              },
            }}
            InputLabelProps={{
              style: { color: "#FF9900" },
            }}
          />
        );
      }}
    />
  );
};
