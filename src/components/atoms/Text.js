import { Typography } from "@mui/material";

export const Text = ({ variant = "body1", children }) => {
  return <Typography variant={variant}>{children}</Typography>;
};
