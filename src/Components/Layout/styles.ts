import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 15px;
    background-color: ${theme.background.default};
  `}
`;

export const ScrollContainer = styled.ScrollView`
  ${({theme}) => css`
    padding: 15px;
    background-color: ${theme.background.default};
  `}
`