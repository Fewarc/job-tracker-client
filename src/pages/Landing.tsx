import { gql, useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";
import Button from "../components/button";

const HELLO = gql`
  query Query {
    hello
  }
`;

const Landing: React.FC = () => {
  const { loading, error, data } = useQuery(HELLO);
  const { t } = useTranslation("translation");

  console.log(data);

  return (
    <main>
      <h1>{t("landing_page.title")}</h1>
      <div>
        <Button>Button</Button>
      </div>
    </main>
  );
};

export default Landing;
