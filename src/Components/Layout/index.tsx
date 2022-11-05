import React, {ReactNode} from 'react';
import {Text} from 'react-native';

import {Container, ScrollContainer} from './styles';

interface LayoutProps {
  children: ReactNode;
  scroll?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, scroll }) => {
  if(scroll) return(<ScrollContainer>{children}</ScrollContainer>);
  else return(<Container>{children}</Container>);
}

export default Layout;
