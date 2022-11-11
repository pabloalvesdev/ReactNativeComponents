import { Animated } from "react-native";
import styled, { css } from "styled-components/native";

interface ComponentProps {
    primaryColor?: string;
    border?: boolean;
}

export const Controller = styled(Animated.View)`
    ${({theme}) => css<ComponentProps>`
        border-radius: 7px;
        min-height: 50px;
        padding: 10px;
        //border: ${a => a.border ? ' 2px solid '+ (a.primaryColor || 'gray') : 'none'};
        margin-top: 10px;
        margin-bottom: 10px;
    `}
`;

export const Title = styled(Animated.Text)`
    ${({theme}) => css<ComponentProps>`
        color: ${a => a.primaryColor || 'gray'};
        font-size: 17px;
        font-weight: bold;
    `}
`;