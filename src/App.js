import React from 'react';
import './App.css';
import MainContainer from './Components/Containers/MainContainer'
import theme from './Components/UI/theme'
import Header from './Components/Header/Header'
import { ThemeProvider } from '@material-ui/styles'
import AuthProvider, { ChartContext } from './Components/Context/chartContext'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
        <MainContainer />
    </ThemeProvider>
  );
}

export default App;
