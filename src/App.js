import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { darkTheme } from "./Theme/darkTheme";
import CustomerRoutes from "./routes/CustomerRoutes";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* <Navbar /> */}

      {/* <HomePage /> */}
      {/* <RestaurantDetails /> */}
      {/* <Cart /> */}
      {/* <Profile /> */}

      <CustomerRoutes />
    </ThemeProvider>
  );
}

export default App;
