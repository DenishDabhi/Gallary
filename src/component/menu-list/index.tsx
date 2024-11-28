import {View, Text, Pressable} from 'react-native';
import React from 'react';
import GallaryIcon from '../../icon/gallary-icon';
import VideoIcon from '../../icon/video-icon';
import DocumentIcon from '../../icon/document-icon';
import NotesIcon from '../../icon/notes-icon';
import AudioIcon from '../../icon/audio-icon';
import {useNavigation} from '@react-navigation/native';

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
    <View
      style={{
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
        flexDirection: 'row',
        gap: 30,
        padding: 20,
      }}>
      {data.map(item => (
        <Pressable
          key={item?.id}
          onPress={() => navigation.navigate(item.desc)}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'lightblue' : 'white',
            },
            {
              borderColor: 'black',
              width: '45%',
              paddingVertical: 45,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000',
              borderRadius: 5,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3,
              elevation: 5,
            },
          ]}>
          {item.icon}
          <Text style={{width: '100%', textAlign: 'center', fontSize: 15}}>
            {item.desc}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default MenuList;
