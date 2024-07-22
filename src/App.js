
// import { baselightTheme } from "./theme/DefaultColors";
import { Themefunc } from './theme/DefaultColors';
import { CssBaseline, ThemeProvider } from '@mui/material';

import './assets/css/index.scss'
import Popup from './components/popup/popup';
// import { useEffect } from 'react';
// import axios from 'axios'; 
// import { FirstTimeWebSrn } from './hooks/FirstTimeWebSrn/FirstTimeWebSrn';
import Showclasses from './components/showclasses';
import Otp from './veiws/Website/authentication/otp/otp';
import  Home  from './veiws/Website/Home/Home';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/loader/loader';
import { useRoutes } from 'react-router';
import { Router } from './routes/routes';

function App() {
  const veri = useSelector((state) => state.Auth.permission);

  const routing = useRoutes(Router);
  const theme = Themefunc();
  return (
    <ThemeProvider theme={theme}>
      <Popup />
      <Loader />
    <CssBaseline />
    {routing}

  </ThemeProvider>
  )
}

export default App;
