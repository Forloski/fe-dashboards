import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "components/molecules/Form";
import { useForm } from "react-hook-form";
import loginFormValidation from "./LoginForm.validation";

export type LoginFormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const useFormMethods = useForm<LoginFormData>({
    mode: "onChange",
    resolver: yupResolver(loginFormValidation()),
  });
  const onSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <Form useFormMethods={useFormMethods} onSubmit={onSubmit}>
      <Form.TextInput id="username" label="Usuário" gridProps={{ xs: 12 }} />
      <Form.TextInput id="password" label="Senha" gridProps={{ xs: 12 }} />
      <Form.SubmitBtn gridProps={{ xs: 12 }}>Entrar</Form.SubmitBtn>
    </Form>
  );
};

export default LoginForm;
