import styled, {css} from 'styled-components/native';

interface Props {
  bold?: boolean;
  title?: boolean;
  centered?: boolean;
}

export const Label = styled.Text`
  ${({theme}) => css<Props>`
    color: ${theme.text.primary};
    text-align: ${a => (a.centered ? 'center' : 'left')};
    font-weight: ${a => (a.bold ? 'bold' : '0')};
    font-size: ${a => (a.title ? '20px' : '15px')};
  `}
`;
