import React, { useState, createContext } from 'react';
import uuid from 'uuid';

export const AppContext = createContext();

const AppContextProvider = props => {
  const value = {};
  return <AppContext.Provider value={value} {...props} />;
};

export default AppContextProvider;
