import React from 'react';
import { Container, TextNoData } from './styles';

const NoData: React.FC = () => {
  return (
    <Container>
      <TextNoData>Sem Dados</TextNoData>
    </Container>
  );
};

export default NoData;
