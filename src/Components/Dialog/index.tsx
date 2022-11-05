import React, {
  BaseSyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {
  Animated,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  GestureResponderEvent,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Bar} from 'react-native-progress';
import {
  Container,
  ModalContainer,
  Header,
  Footer,
  Title,
  Body,
  Button,
  AlertContainer,
  CountDownBar,
} from './styles';
import {Label} from '../Label';
import Themes from '../../Themes';
import {useAppContext} from '../../Context';

const Dialog: React.FC = () => {
  const {dialog, setDialog, theme} = useAppContext();
  const anim = useRef(new Animated.Value(200)).current;
  const [time, setTime] = useState(300);
  const [myInterval, setMyInterval] = useState(0);
  const [count, setCount] = useState(0);
  const countInterval = useRef(null);

  // const loaderValue = useRef(new Animated.Value(0)).current;
  // const countDown = (count: number) => {
  //   Animated.timing(loaderValue, {
  //     toValue: count,
  //     duration: 1000,
  //     useNativeDriver: true
  //   }).start();
  // };

  // const width = loaderValue.interpolate({
  //   inputRange: [0, 100],
  //   outputRange: ['0%', '100%'],
  //   extrapolate: 'clamp'
  // });

  const showAnim = () => {
    Animated.spring(anim, {
      toValue: 0,
      speed: 20,
      bounciness: 10,
      useNativeDriver: true,
    }).start();
  };
  const hideAnim = () => {
    Animated.timing(anim, {
      toValue: 1000,
      duration: 100,
      useNativeDriver: true,
    }).start();
    setTimeout(() => setDialog({show: false}), 125);
  };

  const handleClose = useCallback(() => {
    if (dialog.callBackCancel) {
      dialog.callBackCancel();
      setDialog({show: false});
    } else {
      hideAnim();
    }
  }, [setDialog, dialog.callBackCancel]);

  const handleShow = useCallback(() => {
    if (dialog.callBackConfirm) {
      dialog.callBackConfirm();
      hideAnim();
    }
  }, [dialog.callBackConfirm, setDialog]);

  const handleClassHeader = useCallback(() => {
    if (dialog.mode === 'alert' && dialog.alertType === 'error') return 'error';
    if (dialog.mode === 'dialog' && !dialog.alertType) return 'ask';
    return 'success';
  }, [dialog.mode, dialog.alertType]);

  useEffect(() => {
    if (dialog.show === true) showAnim();
    if (dialog.mode === 'alert' && dialog.alertType == 'success')
      setTimeout(hideAnim, 3000);
  }, [dialog.show, dialog.mode]);

  if (!dialog.show) return null;

  const touch = (e: GestureResponderEvent) => {
    const target =
      e.target._internalFiberInstanceHandleDEV._debugOwner.memoizedProps.style;
    if (target.length != undefined) {
      if (target[0].backgroundColor === 'rgba(0, 0, 0, 0.5)') hideAnim();
    }
  };
  return (
    <Container onTouchEndCapture={touch} style={{zIndex: dialog.show ? 1 : 0}}>
      <ModalContainer
        style={{
          transform: [{translateY: anim}],
          width:
            handleClassHeader() === 'ask'
              ? 300
              : handleClassHeader() === 'success'
              ? 150
              : 200,
          height: handleClassHeader() === 'error' ? 200 : 170,
        }}>
        <Header>
          <Title>{dialog.textTitle || 'Confirmar Operação ?'}</Title>
        </Header>
        <Body>
          {dialog.alertType == 'error' ||
          (dialog.textError && dialog.textError?.length > 0) ? (
            <AlertContainer>
              <Icon
                size={50}
                color={Themes[theme].text.cancel}
                name="warning"
              />
              <ScrollView>
                {['Ocorreu um erro']
                  .concat(dialog.textError as [])
                  .map((text, index) => (
                    <Label key={index.toString()}>{text}</Label>
                  ))}
              </ScrollView>
            </AlertContainer>
          ) : dialog.mode == 'dialog' ? (
            <Label>
              {dialog.textBody ||
                'Tem certeza que deseja realizar esta operação ?'}
            </Label>
          ) : (
            <AlertContainer>
              <Icon
                size={50}
                color={Themes[theme].text.success}
                name="md-checkmark-circle"
              />
              <Label>{dialog.textBody || 'Sucesso'}</Label>
            </AlertContainer>
          )}
        </Body>
        {dialog.mode == 'dialog' && (
          <Footer>
            <Button onPress={handleClose} cancel>
              <Text style={{color: 'white', fontWeight: 'bold'}}>Cancelar</Text>
            </Button>
            <Button onPress={handleShow}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                Confirmar
              </Text>
            </Button>
          </Footer>
        )}
        {/* {dialog.mode == 'alert' && (
          <Bar
            progress={time / 300}
            width={handleClassHeader() === 'error' ? 180 : 140}
          />
        )} */}
        {/* <CountDownBar>
          <Animated.View
            style={[
              StyleSheet.absoluteFill,
              {width: '50%', backgroundColor: 'red'},
            ]}
          />
        </CountDownBar> */}
      </ModalContainer>
    </Container>
  );
};

export default Dialog;
