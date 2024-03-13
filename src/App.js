import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { darkTheme } from "./Theme/darkTheme";
import CustomerRoutes from "./routes/CustomerRoutes";
import Routers from "./routes/Routers";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
