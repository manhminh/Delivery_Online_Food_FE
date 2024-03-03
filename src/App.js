import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { darkTheme } from "./Theme/DarkTheme";
import { CssBaseline } from "@mui/material";
import HomePage from "./components/HomePage/HomePage";
import RestaurantDetails from "./components/Restaurant/RestaurantDetails";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />

      <HomePage />
      {/* <RestaurantDetails /> */}
    </ThemeProvider>
  );
}

export default App;
