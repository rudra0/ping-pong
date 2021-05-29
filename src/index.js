import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles'

import './styles/index.css';
import theme from './styles/theme'
import Start from './pages/PingPong/Start';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <Start />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
