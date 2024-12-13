import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import GallaryIcon from '../../icon/gallary-icon';
import VideoIcon from '../../icon/video-icon';
import DocumentIcon from '../../icon/document-icon';
import NotesIcon from '../../icon/notes-icon';
import AudioIcon from '../../icon/audio-icon';
import {useNavigation} from '@react-navigation/native';
import {theme} from '../../theme/theme';

const MenuList = ({onPress}: {onPress?: () => void}) => {
  const navigation = useNavigation<any>();
  const data = [
    {
      id: 1,
      icon: <GallaryIcon />,
      desc: 'Image',
    },
    {
      id: 2,
      icon: <VideoIcon />,
      desc: 'Video',
    },
    {
      id: 3,
      icon: <DocumentIcon />,
      desc: 'Document',
    },
    {
      id: 4,
      icon: <NotesIcon />,
      desc: 'Notes',
    },
    {
      id: 5,
      icon: <AudioIcon />,
      desc: 'Audio',
    },
  ];
  return (
    <View style={styles.mainView}>
      {data.map(item => (
        <Pressable
          key={item?.id}
          onPress={() => navigation.navigate(item.desc)}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'lightblue' : theme.colors.whiteColor,
            },
            styles.prassebleButton,
          ]}>
          {item.icon}
          <Text style={styles.description}>{item.desc}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: '100%',
    flexDirection: 'row',
    gap: 30,
    padding: 20,
  },
  prassebleButton: {
    borderColor: theme.colors.blackColor,
    width: '45%',
    paddingVertical: 45,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: theme.colors.blackColor,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  description: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: theme.fonts.NunitoBold,
    color: theme.colors.blackColor,
  },
});

export default MenuList;
