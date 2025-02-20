import { useTranslation } from "react-i18next";
import Button from "../components-shared/button";
import { NavLink } from "react-router";

const Landing: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "landing_page" });

  return (
    <main className="landing-page-layout">
      <h1>{t("title")}</h1>
      <NavLink to="/login">
        <Button data-testid="go-to-login-button">{t("login_button")}</Button>
      </NavLink>
    </main>
  );
};

export default Landing;
