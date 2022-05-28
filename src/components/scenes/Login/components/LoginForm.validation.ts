import * as Yup from "yup";
import { LoginFormData } from "./LoginForm.component";

const loginFormValidation = (): Yup.SchemaOf<LoginFormData> => {
  const username = Yup.string().required();
  const password = Yup.string().required();

  return Yup.object().shape({ username, password });
};

export default loginFormValidation;
