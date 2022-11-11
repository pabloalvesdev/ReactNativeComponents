import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {Animated, LayoutChangeEvent, Text, View} from 'react-native';
import { Controller, Title } from './styles';
import Icon from 'react-native-vector-icons/Ionicons'

interface SectionProps {
  children: ReactNode;
  title: string;
  primaryColor?: string;
  height?: number;
}

const Section: React.FC<SectionProps> = ({ children, title, primaryColor, height }) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [childrenHeight, setChildrenHeight] = useState(0);
    const alignTitle = useRef(new Animated.Value(0)).current;
    const rotateValue = useRef(new Animated.Value(0)).current;
    const opacityValue = useRef(new Animated.Value(0)).current;
    const heightValue = useRef(new Animated.Value(50)).current;
    const interpolatedRotate = rotateValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['-90deg', '0deg']
    });
    const interpolatrAlignTitle = alignTitle.interpolate({
        inputRange: [0, 1],
        outputRange: ['100%', '0%']
    });

    //Animations
    const turnRightIcon = () => Animated.timing(rotateValue, { toValue: 0, duration: 100, useNativeDriver: true }).start();
    const turnDownIcon = () => Animated.timing(rotateValue, { toValue: 1, duration: 100, useNativeDriver: true }).start();
    const expandContainer = () =>  Animated.timing(heightValue, { toValue: height || 200, duration: 200, useNativeDriver: false }).start();
    const retractContainer = () => Animated.timing(heightValue, { toValue: 50, duration: 200, useNativeDriver: false }).start();
    const showContent = () => Animated.timing(opacityValue, { toValue: 1, duration: 300, useNativeDriver: true }).start();
    const hideContent = () => Animated.timing(opacityValue, { toValue: 0, duration: 300, useNativeDriver: true }).start();
    const titleToCenter = () => Animated.timing(alignTitle, { toValue: 1, duration: 200, useNativeDriver: false }).start();
    const titleToLeft = () => Animated.timing(alignTitle, { toValue: 0, duration: 200, useNativeDriver: false }).start();

    const openAnim = () => {
       turnDownIcon();
       expandContainer();
       showContent();
       titleToCenter();
    };
    const hideAnim = () => {
        turnRightIcon();
        retractContainer();
        hideContent();
        titleToLeft();
    };
    const runAnimation = () => {
        if(!visible) openAnim();
        else hideAnim();
        setVisible(a => !a);
    }
    
    // AQUI É UMA FUNCAO QUE EU CONSIGO PEGAR O TAMANHO DO CONTAINER AO RENDERIZAR, MAS AINDA N ESTA TERMINADO. PRECISO FAZER COM QUE ELE PEGUE ESSE VALOR E TRANSFORME EM UMA ANIMCAO ANIMADA. MAS ISSO PODE SER DEPOIS.
    // const getHeight = (a: LayoutChangeEvent) => setChildrenHeight(a.nativeEvent.layout.height);

    return(
        <Controller
            primaryColor={primaryColor}
            style={{ 
                height: heightValue,
                // shadowColor: "#000",
                // shadowOffset: {
                //     width: 0,
                //     height: 2,
                // },
                // shadowOpacity: 0.25,
                // shadowRadius: 3.84,
                // elevation: 5 
            }} 
            onTouchEndCapture={runAnimation}
        >
            <Title style={{ alignSelf: 'center', minWidth: interpolatrAlignTitle }} primaryColor={primaryColor}>{title}</Title>
                <Animated.View
                    style={{
                        position: 'absolute',
                        right: 10,
                        top: 5,
                        transform: [{ rotate: interpolatedRotate }]
                    }} 
                >
                    <Icon 
                        size={25} 
                        name='caret-down' 
                        color={primaryColor || 'white'} 
                    />
                </Animated.View>
                <Animated.ScrollView
                    //onLayout={getHeight} 
                    style={{ opacity: opacityValue }}>
                        {children}
                </Animated.ScrollView>
        </Controller>
    );
}

export default Section;