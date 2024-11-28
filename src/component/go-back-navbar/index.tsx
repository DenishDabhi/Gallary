import {View, Text, StatusBar, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Navbar = ({title, icon}: {title: string; icon?: any}) => {
  const navigate = useNavigation<any>();
  return (
    <>
      <StatusBar backgroundColor={'darkblue'} />
      <View
        style={{
          backgroundColor: 'darkblue',
          padding: 15,
          flexDirection: 'row',
          gap: 15,
          alignItems: 'center',
        }}>
        <Pressable onPress={() => navigate.goBack()}>{icon}</Pressable>
        <Text style={{color: '#e8eaed', fontSize: 20, width: '100%'}}>
          {title}
        </Text>
      </View>
    </>
  );
};

export default Navbar;
