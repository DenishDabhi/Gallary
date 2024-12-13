import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LockPage from '../lock-page';
import Home from '../home';
import ImagePage from '../home/image-page';
import VideoPage from '../home/video-page';
import DocumentPage from '../home/document-page';
import NotesPage from '../home/notes-page';
import AudioPage from '../home/audio-page';

const Navigation = () => {
  const Stack = createNativeStackNavigator();

  const sreens = [
    {
      name: 'LockScreen',
      component: LockPage,
    },
    {
      name: 'Home',
      component: Home,
    },
    {
      name: 'Image',
      component: ImagePage,
    },
    {
      name: 'Video',
      component: VideoPage,
    },
    {
      name: 'Document',
      component: DocumentPage,
    },
    {
      name: 'Notes',
      component: NotesPage,
    },
    {
      name: 'Audio',
      component: AudioPage,
    },
  ];

  return (
    <Stack.Navigator>
      {sreens.map(item => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{headerShown: false, animation: 'ios_from_right'}}
        />
      ))}
    </Stack.Navigator>
  );
};

export default Navigation;
