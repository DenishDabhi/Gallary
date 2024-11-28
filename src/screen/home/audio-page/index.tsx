import {View, Text} from 'react-native';
import React from 'react';
import Navbar from '../../../component/go-back-navbar';
import BackIcon from '../../../icon/back-icon';
import AddButton from '../../../component/add-button';

const AudioPage = () => {
  return (
    <>
      <View>
        <Navbar icon={<BackIcon />} title="Audio" />
      </View>
      <AddButton />
    </>
  );
};

export default AudioPage;
