import React, {useEffect} from 'react';
import {StatusBar, Text, View} from 'react-native';
// import {hideNavigationBar} from 'react-native-navigation-bar-color';
import {ThemeProvider} from 'styled-components';
import Dialog from '../Components/Dialog';
import Loading from '../Components/Loading';
import {useAppContext} from '../Context/index';
import Themes from '../Themes';

type Props = {
  children: React.ReactNode;
};

export function AppTemplate({children}: Props) {
  const {theme} = useAppContext();
  useEffect(() => {
    // hideNavigationBar();
  });
  return (
    <ThemeProvider theme={Themes[theme]}>
      <StatusBar backgroundColor={Themes[theme].background.default} />
      <View
        style={{
          flex: 1,
          backgroundColor: Themes[theme].background.default,
        }}>
        <Loading />
        <Dialog />
        {children}
      </View>
    </ThemeProvider>
  );
}
