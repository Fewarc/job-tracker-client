import { useTranslation } from "react-i18next";
import Card from "../components/card";
import Logo from "../components/logo";
import Input from "../components/input";
import Button from "../components/button";
import { NavLink } from "react-router";

const Login: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "login_page" });

  return (
    <main className="login-page-layout">
      <Card>
        <Logo variant="default" />
        <p>{t("welcome")}</p>
        <div className="login-input-container">
          <Input variant="primary-border" inputLabel={t("username")} />
          <Input variant="primary-border" inputLabel={t("password")} />
        </div>
        <div className="login-buttons-container">
          <Button>{t("login")}</Button>
          <div className="or-signup">
            <p>{t("dot_or")}</p>
            <NavLink to="/">{t("signup")}</NavLink>
          </div>
        </div>
      </Card>
    </main>
  );
};

export default Login;
