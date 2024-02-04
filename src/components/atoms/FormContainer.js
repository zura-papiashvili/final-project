import { FormControl, styled } from "@mui/material";
import React from "react";

const StyledFormContainer = styled(FormControl)(() => ({
  marginTop: "15px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const FormContainer = ({ children }) => {
  return <StyledFormContainer>{children}</StyledFormContainer>;
};
