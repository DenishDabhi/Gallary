import {View, ScrollView} from 'react-native';
import React from 'react';
import Navbar from '../../component/go-back-navbar';
import MenuList from '../../component/menu-list';

const Home = () => {
  return (
    <ScrollView>
      <View>
        <Navbar title="Home" />
        <MenuList />
      </View>
    </ScrollView>
  );
};

export default Home;
