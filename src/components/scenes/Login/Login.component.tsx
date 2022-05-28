import { Box, Paper } from "@mui/material";
import Image from "next/image";
import { ToggleThemeBtn } from "components/molecules/ToggleThemeBtn";
import LoginAnimation from "./Login.animation";
import LoginForm from "./components/LoginForm.component";
import { flexCenterContent } from "utils/cssBlocks/flexCenterContent";
const LoginScene = () => {
  return (
    <Box>
      <Image
        style={{ zIndex: -1 }}
        src="/loginImage.webp"
        layout="fill"
        alt=""
        priority
      />

      <LoginAnimation>
        <Box zIndex={1} sx={{ height: "100vh", width: "40vw" }}>
          <ToggleThemeBtn
            style={{ position: "absolute", top: "10px", left: "10px" }}
          />
          <Paper
            elevation={12}
            sx={{
              height: "100vh",
              width: { lg: "40vw", md: "60vw", sm: "80vw", xs: "100vw" },
              ...flexCenterContent,
            }}
          >
            <LoginForm />
          </Paper>
        </Box>
      </LoginAnimation>
    </Box>
  );
};

export default LoginScene;
