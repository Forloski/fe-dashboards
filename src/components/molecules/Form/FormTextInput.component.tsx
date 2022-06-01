import { Grid, GridTypeMap, TextField, TextFieldProps } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { flexCenterContent } from "utils/cssInJsBlocks/flexCenterContent";
import { useFormComponents } from "./hooks/FormComponents.context";

type Props = {
  id: string;
  label: string;
  gridProps?: Omit<GridTypeMap["props"], "item" | "container">;
  textFieldProps?: Omit<TextFieldProps, "variant" | "name" | "label" | "id">;
};

const FormTextInput = (props: Props) => {
  useFormComponents();

  const {
    register,
    formState: { errors },
  } = useFormContext<any>();

  const { textFieldProps, gridProps, label, id } = props;

  return (
    <Grid sx={{ ...flexCenterContent }} {...gridProps} item>
      <TextField
        id={id}
        label={label}
        helperText={errors?.[id]?.message}
        error={!!errors?.[id]?.message}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          width: { md: "40%", sm: "80%" },
        }}
        {...register(id)}
        {...textFieldProps}
      />
    </Grid>
  );
};

export default FormTextInput;
