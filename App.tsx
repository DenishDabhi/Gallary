import {SafeAreaView, View} from 'react-native';
import React from 'react';
import Navigation from './src/screen/navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
      <Toast />
    </SafeAreaView>
  );
};

export default App;
