import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import HomePage from "./components/HomePage/HomePage";
import RestaurantDetails from "./components/Restaurant/RestaurantDetails";
import { darkTheme } from "./Theme/darkTheme";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />

      {/* <HomePage /> */}
      {/* <RestaurantDetails /> */}
      <Cart />
    </ThemeProvider>
  );
}

export default App;
