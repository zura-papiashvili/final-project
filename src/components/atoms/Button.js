import { Button as MUIButton } from "@mui/material";

export const Button = ({ children, onClick, disabled }) => {
  return (
    <MUIButton onClick={onClick} disabled={disabled}>
      {children}
    </MUIButton>
  );
};
