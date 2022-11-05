import styled, {css} from 'styled-components/native';

interface BoxProps {
  centered?: boolean;
  spaced?: boolean;
  flexEnd?: boolean;
  row?: boolean;
  flexSize?: number;
  background?: string;
  card?: boolean;
}

const Box = styled.View`
  ${({theme}) => css<BoxProps>`
    border: ${props => props.card ? '1px solid #9298A1' : 'none' };
    border-radius: 5px;
    padding: 10px;
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

export default Box;
