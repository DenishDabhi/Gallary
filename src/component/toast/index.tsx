import Toast from 'react-native-toast-message';

//This is a common component of a toast message
export const ToastMessage = ({
  type,
  message,
}: {
  type: string;
  message: string;
}) => {
  Toast.show({
    type: type,
    position: 'top',
    text1: message,
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 0,
    swipeable: false,
    text1Style: {
      fontSize: 13,
      color: type === 'error' ? 'red' : 'green',
      width: '100%',
    },
  });
};
