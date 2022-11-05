import React, {type PropsWithChildren} from 'react';
import Home from './src';
import { AppContextProvider } from './src/Context';
import { AppTemplate } from './src/Template';

const App = () => {
  
  return (
    <>
    <AppContextProvider>
      <AppTemplate>
        <Home />
      </AppTemplate>
    </AppContextProvider>
    </>
  );
};

export default App;
