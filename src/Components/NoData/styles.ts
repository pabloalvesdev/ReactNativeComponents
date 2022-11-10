import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.background.lighter};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 100%;
    width: 100%;
  `}
`;

export const TextNoData = styled.Text`
  ${({theme}) => css`
    color: ${theme.text.primary};
    text-align: left;
    font-weight: bold;
    font-size: 15px;
  `}
`;
