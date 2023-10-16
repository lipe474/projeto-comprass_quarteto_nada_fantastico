import { ThemeProvider } from "styled-components/native";
import theme from "../../src/theme";

function MockTheme({ children }: any) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MockTheme;
