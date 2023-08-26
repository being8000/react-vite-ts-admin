import {
  createTheme,
  ThemeProvider,
  // responsiveFontSizes,
} from "@mui/material/styles";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { deepPurple, indigo } from "@mui/material/colors";
export default function ThemeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: deepPurple.A400,
          },
          secondary: indigo,
        },
      }),
    [prefersDarkMode]
  );
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
