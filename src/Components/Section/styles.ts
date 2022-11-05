import { Animated } from "react-native";
import styled, { css } from "styled-components/native";

interface ComponentProps {
    primaryColor?: string;
}

export const Controller = styled(Animated.View)`
    ${({theme}) => css<ComponentProps>`
        border-radius: 7px;
        padding: 10px;
        border: 2px solid ${a => a.primaryColor || 'white'};
        margin-top: 10px;
        margin-bottom: 10px;
    `}
`;

export const Title = styled.Text`
    ${({theme}) => css<ComponentProps>`
        color: ${a => a.primaryColor || 'white'};
        font-size: 17px;
        font-weight: bold;
    `}
`;