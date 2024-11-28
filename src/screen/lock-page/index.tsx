import React, {useRef, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import ReactNativePinView from 'react-native-pin-view';
import ClearIcon from '../../icon/clear-icon';
import RightIcon from '../../icon/right-icon';
import {useNavigation} from '@react-navigation/native';
import {ToastMessage} from '../../component/toast';

const LockPage = () => {
  const pinView = useRef<any>(null);
  const [enteredPin, setEnteredPin] = useState<string>('');
  const navigate = useNavigation<any>();
  const {width, height} = useWindowDimensions();
  const isPortrait = height > width;

  const handlePinComplete = () => {
    if (enteredPin === '221222') {
      // pinView.current.clear();
      navigate.navigate('Home');
      ToastMessage({
        type: 'success',
        message: '✅ Password  successfully',
      });
    } else {
      ToastMessage({
        type: 'error',
        message: '🚨 Password incorrect',
      });
    }
  };

  return (
    <>
      <StatusBar backgroundColor={'darkblue'} />
      <ScrollView style={{backgroundColor: 'darkblue', padding: 15}}>
        <View
          style={{
            backgroundColor: 'white',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: isPortrait ? 150 : 0,
            shadowColor: '#000',
            borderRadius: 5,
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 1,
            shadowRadius: 1,
            elevation: 5,
          }}>
          <Text
            style={{
              paddingTop: 24,
              paddingBottom: 48,
              color: 'black',
              fontSize: 25,
              textAlign: 'center',
              width: '100%',
            }}>
            Please Enter Your PIN
          </Text>
          <ReactNativePinView
            inputSize={32}
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
              borderColor: '#000',
            }}
            inputViewFilledStyle={{
              backgroundColor: '#000',
            }}
            buttonViewStyle={{
              borderWidth: 1,
              borderColor: '#000',
            }}
            buttonTextStyle={{
              color: '#000',
            }}
            onButtonPress={key => {
              if (key === 'custom_left') {
                pinView.current.clear();
              }
              if (key === 'custom_right' && enteredPin.length === 6) {
                handlePinComplete();
              }
            }}
            customLeftButton={<ClearIcon />}
            customRightButton={<RightIcon />}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default LockPage;
