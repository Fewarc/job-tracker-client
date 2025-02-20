import { useTranslation } from "react-i18next";
import Card from "../components-shared/card";
import Logo from "../components-shared/logo";
import Input from "../components-shared/input";
import Button from "../components-shared/button";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../utils/schemas";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/user";

type LoginSchemaType = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "login_page" });
  const [loginUser, { data: mutationData, loading, error }] =
    useMutation(LOGIN_USER);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = handleSubmit((data) => loginUser({ variables: data }));

  throw new Error("TEST ERROR BOUNDARY");
  return (
    <main className="login-page-layout">
      <Card>
        <Logo variant="default" />
        <p>{t("welcome")}</p>
        <form className="login-input-container" onSubmit={onSubmit}>
          <Input
            {...register("email")}
            variant="primary-border"
            inputLabel={t("email")}
            error={errors.email?.message}
          />
          <Input
            {...register("password")}
            variant="primary-border"
            inputLabel={t("password")}
            error={errors.password?.message}
            type="password"
          />
          <div className="login-buttons-container">
            <Button loading={loading} type="submit">
              {t("login")}
            </Button>
            <div className="or-signup">
              <p>{t("dot_or")}</p>
              <NavLink to="/">{t("signup")}</NavLink>
            </div>
          </div>
        </form>
      </Card>
    </main>
  );
};

export default Login;
