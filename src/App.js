import { ThemeProvider } from "@emotion/react";
import Navbar from "./components/Navbar/Navbar";
import { CssBaseline } from "@mui/material";
import HomePage from "./components/HomePage/HomePage";
import RestaurantDetails from "./components/Restaurant/RestaurantDetails";
import { darkTheme } from "./Theme/darkTheme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />

      {/* <HomePage /> */}
      <RestaurantDetails />
    </ThemeProvider>
  );
}

export default App;
