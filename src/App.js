import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home/index";
import { lightTheme, darkTheme, GlobalStyles } from "./theme";
import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
    <GlobalStyles />
      <button onClick={toggleTheme} className='btn-sw'>
        {isDarkTheme ? (
          <span aria-label="Light mode" role="img">
            🌞
          </span>
        ) : (
          <span aria-label="Dark mode" role="img">
            🌜
          </span>
        )}
      </button>
      <Home />
    </ThemeProvider>
  );
}

export default App;
