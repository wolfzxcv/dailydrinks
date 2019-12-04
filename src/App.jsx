import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import AppContextProvider from './context/AppContext';
import Header from './components/Header/Header';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Header />
        <List />
        <Footer />
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
