import {View, Text, StatusBar, Pressable} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../theme/theme';

const Navbar = ({title, icon}: {title: string; icon?: any}) => {
  const navigate = useNavigation<any>();
  return (
    <>
      <StatusBar backgroundColor={theme.colors.darkBlue} />
      <View
        style={{
          backgroundColor: theme.colors.darkBlue,
          padding: 15,
          flexDirection: 'row',
          gap: 15,
          alignItems: 'center',
        }}>
        <Pressable onPress={() => navigate.goBack()}>{icon}</Pressable>
        <Text
          style={{
            color: '#e8eaed',
            fontSize: 20,
            width: '100%',
            fontFamily: theme.fonts.NunitoSemiBold,
          }}>
          {title}
        </Text>
      </View>
    </>
  );
};

export default Navbar;
