import {View, Text} from 'react-native';
import React from 'react';
import BackIcon from '../../../icon/back-icon';
import Navbar from '../../../component/go-back-navbar';
import AddButton from '../../../component/add-button';

const DocumentPage = () => {
  return (
    <>
      <View>
        <Navbar icon={<BackIcon />} title="Document" />
      </View>
      <AddButton />
    </>
  );
};

export default DocumentPage;
