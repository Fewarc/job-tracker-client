import { useTranslation } from "react-i18next";
import Card from "../components-shared/card";
import Logo from "../components-shared/logo";
import InputBar from "../components-shared/input-bar/input-bar";
import Button from "../components-shared/button";
import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../utils/schemas";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphql/user";
import { toast } from "sonner";
import Form from "../components-shared/form/form";

type LoginSchemaType = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "login_page" });
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
  });

  const onSubmit = handleSubmit((data) => loginUser({ variables: data }));

  return (
    <main className="login-page-layout">
      <Card>
        <Logo variant="default" />
        <p>{t("welcome")}</p>
        <Form onSubmit={onSubmit}>
          <Form.Fields>
            <InputBar variant="primary-border">
              <InputBar.Label>{t("email")}</InputBar.Label>
              <InputBar.Input {...register("email")} />
              <InputBar.Error>{errors.email?.message}</InputBar.Error>
            </InputBar>
            <InputBar variant="primary-border">
              <InputBar.Label>{t("password")}</InputBar.Label>
              <InputBar.Input {...register("password")} type="password" />
              <InputBar.Error>{errors.password?.message}</InputBar.Error>
            </InputBar>
          </Form.Fields>
          <Form.Footer>
            <Button loading={loading} type="submit">
              {t("login")}
            </Button>
          </Form.Footer>
        </Form>
        <div className="or-signup">
          <p>{t("dot_or")}</p>
          <Button variant="link">
            <NavLink to="/">{t("signup")}</NavLink>
          </Button>
        </div>
      </Card>
    </main>
  );
};

export default Login;
