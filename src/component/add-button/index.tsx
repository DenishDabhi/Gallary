import {TouchableOpacity} from 'react-native';
import React from 'react';
import PlusIcon from '../../icon/plus-icon';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const AddButton = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
    //   onPress={() => navigation.navigate('AddBusiness')}
      style={{
        backgroundColor: 'darkblue',
        height: 63,
        width: 63,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
      activeOpacity={0.8}>
      <PlusIcon />
    </TouchableOpacity>
  );
};

export default AddButton;
