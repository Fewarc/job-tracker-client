import { useTranslation } from "react-i18next";

const Landing: React.FC = () => {
  const { t } = useTranslation("translation");

  return <main>{t("landing_page.title")}</main>;
};

export default Landing;
