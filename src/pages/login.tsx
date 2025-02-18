import { useTranslation } from "react-i18next";
import Card from "../components/card";
import Logo from "../components/logo";

const Login: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "login_page" });

  return (
    <main className="login-page-layout">
      <Card>
        <Logo variant="regular" />
        <p>{t("welcome")}</p>
      </Card>
    </main>
  );
};

export default Login;
