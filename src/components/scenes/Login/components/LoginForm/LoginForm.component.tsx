import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "components/molecules/Form";
import { useForm } from "react-hook-form";
import { signIn, SignInResponse, useSession } from "next-auth/react";
import loginFormValidation from "./LoginForm.validation";
import { useRouter } from "next/router";
import { http } from "services/http";

export type LoginFormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const formHandler = useForm<LoginFormData>({
    mode: "onChange",
    resolver: yupResolver(loginFormValidation()),
  });

  const onSubmit = async (data: LoginFormData) => {
    const { error, ok } = (await signIn("credentials", {
      redirect: false,
      ...data,
    })) as unknown as SignInResponse;

    ok && router.push("/home");
    error && console.log(error);
  };

  return (
    <Form handler={formHandler} onSubmit={onSubmit}>
      <Form.TextInput id="username" label="Usuário" gridProps={{ xs: 12 }} />
      <Form.TextInput id="password" label="Senha" gridProps={{ xs: 12 }} />
      <Form.SubmitBtn gridProps={{ xs: 12 }}>Entrar</Form.SubmitBtn>
    </Form>
  );
};

export default LoginForm;
