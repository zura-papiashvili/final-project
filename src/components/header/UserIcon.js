import React, { useState } from "react";
import { useUser } from "../../hooks";
import { Avatar, Box, IconButton, Menu, MenuItem, styled } from "@mui/material";
import { Button, Link } from "../atoms";
import { useDispatch } from "react-redux";
import { clearCart, logout } from "../../redux";
import { getUserInitials, isUserAdmin } from "../../helpers";
import { useTranslation } from "react-i18next";

const StyledBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  gap: 2,
}));

export const UserIcon = () => {
  const { userData } = useUser();
  const [anchor, setAnchor] = useState(null);
  const dispatch = useDispatch();

  return (
    <Box>
      <IconButton onClick={(e) => setAnchor(e.currentTarget)}>
        <Avatar>{getUserInitials(userData)}</Avatar>
      </IconButton>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
      >
        <Box>
          <StyledBox>
            {!userData && (
              <>
                <MenuItem>
                  <Link to="/login">Login</Link>
                </MenuItem>

                <MenuItem>
                  <Link to="/signup">Signup</Link>
                </MenuItem>
              </>
            )}
            {userData && (
              <>
                <MenuItem>
                  <Button
                    onClick={() => {
                      dispatch(logout());
                      dispatch(clearCart());
                    }}
                  >
                    Logout
                  </Button>
                </MenuItem>
              </>
            )}
            {userData && isUserAdmin(userData) && (
              <MenuItem>
                <Link to="/products/add">Add Product</Link>
              </MenuItem>
            )}
          </StyledBox>
        </Box>
      </Menu>
    </Box>
  );
};
