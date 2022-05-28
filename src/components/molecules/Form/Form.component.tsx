import { Grid, GridTypeMap } from "@mui/material";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { flexCenterContent } from "utils/cssBlocks/flexCenterContent";
import FormSubmitBtn from "./FormSubmitBtn.component";
import FormTextInput from "./FormTextInput.component";
import { FormComponentsProvider } from "./hooks/FormComponents.context";

type Props = Omit<
  GridTypeMap<React.FormHTMLAttributes<HTMLFormElement>>["props"],
  "item" | "container" | "component" | "onSubmit"
> & {
  useFormMethods: UseFormReturn<any, any>;
  onSubmit: (data: any) => void;
};

const Form = (props: Props) => {
  const { children, useFormMethods, onSubmit, ...rest } = props;
  const { handleSubmit } = useFormMethods;

  return (
    <FormProvider {...useFormMethods}>
      <form></form>

      <Grid
        columnGap={2}
        rowGap={2}
        sx={{ ...flexCenterContent }}
        onSubmit={handleSubmit(onSubmit)}
        {...rest}
        container
        component="form"
        autoComplete="off"
      >
        <FormComponentsProvider>{children}</FormComponentsProvider>
      </Grid>
    </FormProvider>
  );
};

Form.SubmitBtn = FormSubmitBtn;
Form.TextInput = FormTextInput;

export default Form;
