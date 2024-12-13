import React, {useRef, useState} from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import ReactNativePinView from 'react-native-pin-view';
import ClearIcon from '../../icon/clear-icon';
import RightIcon from '../../icon/right-icon';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {ToastMessage} from '../../component/toast';
import TouchID from 'react-native-touch-id';
import Fingerprint from '../../icon/fingerprint';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {theme} from '../../theme/theme';

const LockPage = () => {
  const pinView = useRef<any>(null);
  const [enteredPin, setEnteredPin] = useState<string>('');
  const navigate = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const {width, height} = useWindowDimensions();
  const isPortrait = height > width;
  const Clear: any = <ClearIcon />;
  const Right: any = <RightIcon />;
  const [successfully, setSuccessfully] = useState<boolean>(false);

  const handlePinComplete = () => {
    if (enteredPin === '221222' || successfully) {
      // pinView.current.clear();
      pinView.current.clearAll();
      navigate.navigate('Home');
      ToastMessage({
        type: 'success',
        message: '✅ Unlocked successfully',
      });
    } else {
      ToastMessage({
        type: 'error',
        message: '🚨 Password incorrect',
      });
    }
  };
  const authenticate = () => {
    TouchID.authenticate('Use Finger Print To Unlock', {
      cancelText: 'Cancel',
      imageColor: '#057DCD',
      title: 'Gallery Lock',
      passcodeFallback: true,
    })
      .then((success: any) => {
        setSuccessfully(success);
        // navigate.navigate('Home');
        ToastMessage({
          type: 'success',
          message: '✅ Unlocked successfully',
        });
      })
      .catch((error: {message: string | undefined}) => {
        console.log('Finger not match');
        ToastMessage({
          type: 'error',
          message: '🚨 Finger not match',
        });
      });
  };

  return (
    <>
      <StatusBar backgroundColor={theme.colors.darkBlue} />
      <ScrollView style={styles.scrollview}>
        <View style={[{marginTop: isPortrait ? 100 : 0}, styles.mainView]}>
          <Text style={styles.headingText}>Please Enter Your PIN</Text>
          <Pressable onPress={authenticate} style={styles.fingerView}>
            <Fingerprint color={theme.colors.whiteColor} />
            <Text style={styles.fingerText}>Use Finger Print To Unlock</Text>
          </Pressable>
          <ReactNativePinView
            inputSize={32}
            //@ts-ignore
            ref={pinView}
            pinLength={6}
            buttonSize={55}
            activeOpacity={0.5}
            onValueChange={value => setEnteredPin(value)}
            buttonAreaStyle={{
              marginTop: 24,
            }}
            inputAreaStyle={{
              marginBottom: 24,
            }}
            inputViewEmptyStyle={{
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: theme.colors.blackColor,
            }}
            inputViewFilledStyle={{
              backgroundColor: theme.colors.blackColor,
            }}
            buttonViewStyle={{
              borderWidth: 1,
              borderColor: theme.colors.blackColor,
            }}
            buttonTextStyle={{
              color: theme.colors.blackColor,
              fontFamily: theme.fonts.NunitoSemiBold,
            }}
            onButtonPress={key => {
              if (key === 'custom_left') {
                pinView.current.clear();
              }
              if (key === 'custom_right' && enteredPin.length === 6) {
                handlePinComplete();
              }
            }}
            customLeftButton={Clear}
            customRightButton={Right}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: theme.colors.darkBlue,
    padding: 15,
  },
  mainView: {
    backgroundColor: theme.colors.whiteColor,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.blackColor,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 5,
  },
  headingText: {
    paddingTop: 24,
    paddingBottom: 20,
    color: theme.colors.blackColor,
    fontSize: 25,
    textAlign: 'center',
    width: '100%',
    fontFamily: theme.fonts.NunitoBold,
  },
  fingerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E8BC0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    gap: 5,
  },
  fingerText: {
    color: theme.colors.whiteColor,
    fontSize: 18,
    width: '80%',
  },
});
export default LockPage;
