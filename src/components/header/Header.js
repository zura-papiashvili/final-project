import { AppBar, Badge, Box, Toolbar, styled } from "@mui/material";
import React, { useState } from "react";
import { Button, LanguageSelect, Link } from "../atoms";
import { SearchBar } from "./SearchBar";
import { UserIcon } from "./UserIcon";
import { CartDrawer } from "./CartDrawer";
import { useCart } from "../../hooks";
import { GiShoppingCart } from "react-icons/gi";

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "#131921",
  padding: "0 37px 0 30px ",
}));

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  paddingTop: 10,
  paddingBottom: 10,
}));

export const Header = () => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const { cartItems } = useCart();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position="static">
        <StyledToolbar>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "1.5rem",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
          <SearchBar
            style={{
              color: "white",
              backgroundColor: "white",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button onClick={() => setIsCartDrawerOpen(true)}>
              <Badge badgeContent={cartItems.length} color="primary">
                <GiShoppingCart size={30} color="red" />
              </Badge>
            </Button>
            <UserIcon />
            <LanguageSelect />
          </Box>
        </StyledToolbar>
      </StyledAppBar>
      <CartDrawer
        cartItems={cartItems}
        isCartDrawerOpen={isCartDrawerOpen}
        setIsCartDrawerOpen={setIsCartDrawerOpen}
      />
    </Box>
  );
};
