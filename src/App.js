import "./App.css";
import { RoutesComponent } from "./routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchHomePageProducts } from "./redux";
import { Grid } from "@mui/material";
import { Header } from "./components/header";
import { useUser } from "./hooks";

function App() {
  const dispatch = useDispatch();
  const { userData } = useUser();
  useEffect(() => {
    if (userData) {
      dispatch(fetchHomePageProducts(userData._id));
    }
  }, [userData]);
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
  );
}

export default App;
