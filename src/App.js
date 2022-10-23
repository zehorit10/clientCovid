import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routers from './Routers';

import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme, {cacheRtl} from "./theme";

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routers />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
