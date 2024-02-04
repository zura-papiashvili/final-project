import { TextField } from "@mui/material";
import React from "react";

export const Input = ({
  type = "text",
  label = "Label",
  error,
  variant = "outlined",
  helperText,
  name,
  onChange,
  value,
  placeholder = "Placeholder",
  styles = {},
}) => {
  return (
    <TextField
      type={type}
      label={label}
      error={error}
      variant={variant}
      helperText={helperText}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      sx={{
        width: 200,
        marginTop: 5,
        "& fieldset": {
          borderRadius: `20px`,
        },
        ...styles,
      }}
    />
  );
};
