import React from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {useAppContext} from '../../Context';
import Themes from '../../Themes';
import {Label} from '../Label';

import {Container} from './styles';

const Loading = () => {
  const {loading, theme} = useAppContext();
  return (
    <Container style={{zIndex: loading ? 1 : 0}}>
      <ActivityIndicator color={Themes[theme].primary.default} />
      <Label style={{marginLeft: 10}} bold>
        Loading...
      </Label>
    </Container>
  );
};

export default Loading;
