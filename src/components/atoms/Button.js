import { Button as MUIButton } from "@mui/material/Button";

export const Button = (children, onClick) => {
  return (
    <MUIButton onClick={onClick} variant="contained" color="primary">
      {children}
    </MUIButton>
  );
};
