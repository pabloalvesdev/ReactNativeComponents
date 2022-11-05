import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {Animated, Text, View} from 'react-native';
import { Controller, Title } from './styles';
import Icon from 'react-native-vector-icons/Ionicons'

interface SectionProps {
  children: ReactNode;
  title: string;
  primaryColor?: string;
}

const Section: React.FC<SectionProps> = ({ children, title, primaryColor }) => {
    const [visible, setVisible] = useState<boolean>(false);
    const rotateValue = useRef(new Animated.Value(0)).current;
    const opacityValue = useRef(new Animated.Value(0)).current;
    const heightValue = useRef(new Animated.Value(50)).current;
    const interpolatedRotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-90deg']
    });

    const changeVisible = () => setVisible(a => !a);

    const openAnim = () => {
        Animated.timing(rotateValue, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true
        }).start();
        Animated.timing(heightValue, {
            toValue: 50,
            duration: 200,
            useNativeDriver: false
        }).start();
        Animated.timing(opacityValue, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start();
    };
    const hideAnim = () => {
        Animated.timing(rotateValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true
        }).start();
        Animated.timing(heightValue, {
            toValue: 300,
            duration: 200,
            useNativeDriver: false
        }).start();
        Animated.timing(opacityValue, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true
        }).start();
    };
    const runAnimation = () => {
        if(visible) hideAnim();
        else openAnim();
    }
 
    useEffect(() => {
        runAnimation();
    },[visible]);
    return(
        <Controller
            primaryColor={primaryColor}
            style={{height: heightValue}} 
            onTouchEndCapture={changeVisible}
        >
            <Title primaryColor={primaryColor}>{title}</Title>
                <Animated.View
                    style={{
                        position: 'absolute',
                        right: 10,
                        top: 5,
                        transform: [{rotate: interpolatedRotate}]
                    }} 
                >
                    <Icon 
                        size={25} 
                        name='caret-down' 
                        color={primaryColor || 'white'} 
                    />
                </Animated.View>
            <Animated.ScrollView style={{opacity: opacityValue}}>{children}</Animated.ScrollView>
        </Controller>
    );
}

export default Section;