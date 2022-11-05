import React from 'react';
import {useAppContext} from '../../Context';
import Icon from 'react-native-vector-icons/Ionicons';
import Themes from '../../Themes';

const SettingsIcon = () => {
  const {theme, changeTheme} = useAppContext();
  return (
    <Icon
      size={30}
      color={Themes[theme].text.primary}
      name={theme === 'light' ? 'sunny' : 'moon'}
      onPress={changeTheme}
    />
  );
};

export default SettingsIcon;
