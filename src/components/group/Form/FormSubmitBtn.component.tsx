import { Button, ButtonTypeMap, Grid, GridTypeMap } from "@mui/material";
import { flexCenterContent } from "utils/cssInJsBlocks/flexCenterContent";
import { useFormComponents } from "./context/FormComponents.context";

type Props = {
  children: React.ReactNode;
  gridProps?: Omit<GridTypeMap["props"], "item" | "container">;
  btnProps?: ButtonTypeMap<{}, "button">;
};

const FormSubmitBtn = (props: Props) => {
  useFormComponents();

  const { children, gridProps, btnProps } = props;

  return (
    <Grid sx={{ ...flexCenterContent }} {...gridProps} item>
      <Button id="submit" type="submit" size="large" {...btnProps}>
        {children}
      </Button>
    </Grid>
  );
};

export default FormSubmitBtn;
