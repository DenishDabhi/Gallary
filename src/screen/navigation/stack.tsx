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

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LockScreen"
        component={LockPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Image"
        component={ImagePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Video"
        component={VideoPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Document"
        component={DocumentPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notes"
        component={NotesPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Audio"
        component={AudioPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
