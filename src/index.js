import "./index.css";

import { ThemeProvider, createTheme, styled } from "@mui/material/styles";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import UserContextProvider from "./context/UserContext";

ReactDOM.render(
  <React.Fragment>
    <CssBaseline enableColorScheme />
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
);
