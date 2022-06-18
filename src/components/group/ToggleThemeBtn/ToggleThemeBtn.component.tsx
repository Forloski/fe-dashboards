import { IconButton } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useToggleTheme } from "theme";
import ToggleThemeBtnAnimation from "./ToggleThemeBtn.animation";

type Props = {
  style?: React.CSSProperties;
};

const ToggleThemeBtn = (props: Props) => {
  const { themeMode, toggleTheme } = useToggleTheme();

  return (
    <div style={{ ...props.style, overflow: "hidden" }}>
      <IconButton onClick={toggleTheme} sx={{ overflow: "hidden" }}>
        <ToggleThemeBtnAnimation>
          {themeMode === "light" ? <LightMode /> : <DarkMode />}
        </ToggleThemeBtnAnimation>
      </IconButton>
    </div>
  );
};

export default ToggleThemeBtn;
