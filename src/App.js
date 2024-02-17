import { Link } from "react-router-dom";
import "./App.css";
import { RoutesComponent } from "./routes";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "./components/atoms";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchHomePageProducts } from "./redux";
import { Grid } from "@mui/material";
import { Header } from "./components/header";

function App() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomePageProducts());
  }, [dispatch]);
  return (
    <>
      <Grid sx={{ minHeight: "100vh" }}>
        <Grid item>
          <Header />
        </Grid>
        <Grid
          item
          sx={{
            paddingTop: 20,
            minHeight: "100vh",
            width: "100%",
            pb: 10,
            backgroundColor: "#f5f5f5",
          }}
        >
          <RoutesComponent />
        </Grid>
      </Grid>
    </>
    // <div className="App">
    //   <div>
    //     <Link to="/">{t("home")}</Link>
    //   </div>
    //   <div>
    //     <Link to="/login">{t("login")}</Link>
    //   </div>
    //   <div>
    //     <Link to="/signup">{t("signup")}</Link>
    //   </div>
    //   <LanguageSelect />
    //   <Link to="/products/add" style={{ display: "block", margin: "10px 0" }}>
    //     add product
    //   </Link>
    //   <RoutesComponent />
    // </div>
  );
}

export default App;
