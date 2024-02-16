import { Box, CircularProgress, styled } from "@mui/material";
const StyleedLoadingContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
}));
export const Loading = ({ size = 100, color = "primary" }) => {
  return (
    <StyleedLoadingContainer>
      <CircularProgress size={size} color={color} />
    </StyleedLoadingContainer>
  );
};

export const LoadingWrapper = ({ isLoading, children }) => {
  return isLoading ? <Loading /> : children;
};
