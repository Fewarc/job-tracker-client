import { gql, useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import Button from "../components/button";
import { NavLink } from "react-router";

const HELLO = gql`
  query Query {
    hello
  }
`;

const Landing: React.FC = () => {
  const { loading, error, data } = useQuery(HELLO);
  const { t } = useTranslation("translation", { keyPrefix: "landing_page" });

  console.log(data);

  return (
    <main className="landing-page-layout">
      <h1>{t("title")}</h1>
      <NavLink to="/login">
        <Button>{t("login_button")}</Button>
      </NavLink>
    </main>
  );
};

export default Landing;
