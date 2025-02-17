import { gql, useQuery } from "@apollo/client";
import { useTranslation } from "react-i18next";

const HELLO = gql`
  query Query {
    hello
  }
`;

const Landing: React.FC = () => {
  const { loading, error, data } = useQuery(HELLO);
  const { t } = useTranslation("translation");

  console.log(data);

  return <main>{t("landing_page.title")}</main>;
};

export default Landing;
