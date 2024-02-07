import { Link } from "react-router-dom";
import "./App.css";
import { RoutesComponent } from "./routes";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "./components/atoms";

function App() {
  const { t } = useTranslation();
  return (
    <div className="App">
      <div>
        <Link to="/">{t("home")}</Link>
      </div>
      <div>
        <Link to="/login">{t("login")}</Link>
      </div>
      <div>
        <Link to="/signup">{t("signup")}</Link>
      </div>
      <LanguageSelect />
      <RoutesComponent />
    </div>
  );
}

export default App;
