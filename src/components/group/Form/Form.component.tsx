import { Grid, GridTypeMap } from "@mui/material";
import { FormProvider, UseFormReturn } from "react-hook-form";
import { flexCenterContent } from "utils/cssInJsBlocks/flexCenterContent";
import { FormComponentsProvider } from "./context/FormComponents.context";
import FormSubmitBtn from "./FormSubmitBtn.component";
import FormTextInput from "./FormTextInput.component";

type Props = Omit<
  GridTypeMap<React.FormHTMLAttributes<HTMLFormElement>>["props"],
  "item" | "container" | "component" | "onSubmit"
> & {
  handler: UseFormReturn<any, any>;
  onSubmit: (data: any) => void;
};

const Form = (props: Props) => {
  const { children, handler, onSubmit, ...rest } = props;
  const { handleSubmit } = handler;

  return (
    <FormProvider {...handler}>
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
