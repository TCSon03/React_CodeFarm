import React from "react";
import HeaderClient from "./components/HeaderClient";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    
    <ThemeProvider>

      <HeaderClient />
    </ThemeProvider>
  );
};

export default App;