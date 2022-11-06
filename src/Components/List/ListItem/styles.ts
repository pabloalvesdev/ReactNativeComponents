import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  ${({theme}) => css`
    background-color: ${theme.background.default};
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    padding: 10px;
  `}
`;

interface LabelProps {
  bold?: boolean;
  title?: boolean;
  centered?: boolean;
}

export const Label = styled.Text`
  ${({theme}) => css<LabelProps>`
    color: ${theme.text.primary};
    text-align: ${a => (a.centered ? 'center' : 'left')};
    font-weight: ${a => (a.bold ? 'bold' : '0')};
    font-size: ${a => (a.title ? '20px' : '15px')};
  `}
`;

interface BoxProps {
  centered?: boolean;
  spaced?: boolean;
  flexEnd?: boolean;
  row?: boolean;
  flexSize?: number;
  background?: string;
  card?: boolean;
  marginVertical?: number;
}

export const Box = styled.View`
  ${({theme}) => css<BoxProps>`
    border-radius: 5px;
    margin-top: ${props => props.marginVertical ? props.marginVertical+'px' : '0px'};
    margin-bottom: ${props => props.marginVertical ? props.marginVertical+'px' : '0px'};
    background-color: ${props =>
      props.background ? props.background : 'none' };
    display: flex;
    width: 100%;
    flex: ${props => props.flexSize};
    flex-direction: ${ props => (props.row ? 'row' : 'column') };
    justify-content: ${ props =>
      props.centered
        ? 'center'
        : props.spaced
        ? 'space-between'
        : props.flexEnd
        ? 'flex-end'
        : 'flex-start'};
  `}
`;
