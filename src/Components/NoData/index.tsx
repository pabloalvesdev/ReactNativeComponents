import React from 'react';
import { useTheme } from '../../context/themeContext';
import Label from '../Label';
import * as Style from './style';

const NoData: React.FC = () => {
  const { currentTheme } = useTheme();
  return (
    <Style.Container>
      <Label bold>Sem Dados</Label>
    </Style.Container>
  );
};

export default NoData;
