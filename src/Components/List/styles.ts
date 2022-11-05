import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    background-color: ${theme.background.lighter};
    width: 100%;
    height: 90%;
    border-radius: 10px;
    padding: 10px;
  `}
`;