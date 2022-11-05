import {Animated} from 'react-native';
import styled, {css} from 'styled-components/native';

export const Container = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled(Animated.View)`
  ${({theme}) =>
    css`
      border-radius: 10px;
      padding: 10px;
      background-color: ${theme.background.default};
    `}
`;

export const Header = styled.View`
  ${({theme}) => css`
    padding-bottom: 5px;
    border-bottom-width: 1px;
    border-bottom-color: ${theme.text.primary};
  `}
`;

export const Body = styled.View`
  ${({theme}) => css`
    flex: 2;
  `}
`;

export const Footer = styled.View`
  ${({theme}) => css`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 10px;
  `}
`;

export const AlertContainer = styled.View`
  ${({theme}) => css`
    justify-content: center;
    align-items: center;
  `}
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.text.primary};
    font-size: 20px;
    font-weight: bold;
  `}
`;

export const Button = styled.TouchableOpacity`
  ${({theme}) => css<{cancel?: boolean}>`
    padding: 5px;
    background-color: ${a =>
      a.cancel ? a.theme.text.cancel : a.theme.text.success};
    margin-right: ${a => (a.cancel ? '10px' : '0px')};
    border-radius: 5px;
  `}
`;

export const CountDownBar = styled.View`
  ${({theme}) => css`
    position: absolute;
    height: 10px;
    width: 110%;
  `}
`;
