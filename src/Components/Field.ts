import styled, {css} from 'styled-components/native';

interface FieldProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  descricao?: boolean;
  centeredText?: boolean;
}

const Field = styled.TextInput`
  ${({theme}) => css<FieldProps>`
    width: ${props =>
      props.small
        ? '30%'
        : props.medium
        ? '60%'
        : props.large
        ? '100%'
        : '60%'};
    padding: 0px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.text.primary};
    color: ${theme.text.primary};
    text-align: ${props => (props.centeredText ? 'center' : 'left')};
  `}
`;

export default Field;
