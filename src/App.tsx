import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import { theme } from './theme'
import Container from "./Container";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container />
    </ThemeProvider>
  );
};

export default App;