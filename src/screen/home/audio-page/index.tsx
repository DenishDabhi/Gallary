import {
  View,
  Text,
  FlatList,
  Pressable,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Navbar from '../../../component/go-back-navbar';
import BackIcon from '../../../icon/back-icon';
// import AddButton from '../../../component/add-button';
import RNFS from 'react-native-fs';
import Sound from 'react-native-sound';
import PlayIcon from '../../../icon/play-icon';
import PlayStopIcon from '../../../icon/stop-pay';
import {theme} from '../../../theme/theme';

interface RenderAudioItemProps {
  item: any;
  playingFile: string | null;
  toggleAudio: (filePath: any) => void;
}

const AudioPage = () => {
  const [audios, setAudios] = useState<string[]>([]);
  const [currentSound, setCurrentSound] = useState<any>(null);
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [playingFile, setPlayingFile] = useState<string | null>(null);

  const getAllMusicFiles = async () => {
    const musicFiles: any = [];

    const traverseDirectory = async (directoryPath: any) => {
      setIsPlay(true);
      try {
        const files = await RNFS.readDir(directoryPath);
        if (files && Array.isArray(files)) {
          // Check if files is valid
          for (const file of files) {
            if (file.isDirectory()) {
              await traverseDirectory(file.path); // Recursively search subdirectories
            } else if (
              file.isFile() &&
              (file.name.endsWith('.mp3') || file.name.endsWith('.wav'))
            ) {
              musicFiles.push(file.path); // Add audio files to the list
              setIsPlay(false);
            } else {
              setIsPlay(false);
            }
          }
        }
      } catch (error) {
        setIsPlay(false);
        // console.error('Error reading directory:', error);
      }
    };

    try {
      await traverseDirectory(RNFS.ExternalStorageDirectoryPath); // Start from the root
      // console.log('All Music Files:', musicFiles);
      setAudios(musicFiles);
      setIsPlay(false);
      return musicFiles; // Return the list of audio files
    } catch (error) {
      console.error('Error finding music files:', error);
      setIsPlay(false);
    }
  };

  const toggleAudio = (filePath: string) => {
    if (currentSound && playingFile === filePath) {
      // If the same audio is playing, stop it
      currentSound.stop();
      setCurrentSound(null);
      setPlayingFile(null);
    } else {
      // Stop currently playing sound if different
      if (currentSound) {
        currentSound.stop();
        setCurrentSound(null);
      }

      // Play new sound
      const sound = new Sound(filePath, '', error => {
        if (error) {
          console.error('Failed to load the sound', error);
          return;
        }
        sound.play(success => {
          if (!success) {
            console.error('Playback failed due to audio decoding errors');
          }
          sound.release(); // Release memory after playback
          setCurrentSound(null);
          setPlayingFile(null);
        });
      });

      setCurrentSound(sound);
      setPlayingFile(filePath);
    }
  };

  const RenderAudioItem: React.FC<RenderAudioItemProps> = React.memo(
    ({item, playingFile, toggleAudio}: any) => (
      <View
        style={{
          backgroundColor: theme.colors.whiteColor,
          alignItems: 'center',
        }}>
        <Pressable
          style={{
            width: '90%',
            height: 40,
            backgroundColor: theme.colors.whiteColor,
            marginTop: 20,
            flexDirection: 'row',
            gap: 8,
            alignItems: 'center',
            borderRadius: 5,
          }}
          onPress={() => toggleAudio(item)}
          >
          <Image
            source={require('../../../images/music.png')}
            style={{height: 25, width: 25}}
          />
          <Text
            numberOfLines={2}
            style={{
              width: '80%',
              fontFamily: theme.fonts.NunitoSemiBold,
              color: theme.colors.blackColor,
            }}>
            {item.split('/').pop()}
          </Text>
          <Pressable onPress={() => toggleAudio(item)}>
            {playingFile === item ? (
              <PlayStopIcon color="red" height={30} width={30} />
            ) : (
              <PlayIcon
                color={theme.colors.blackColor}
                height={32}
                width={32}
              />
            )}
          </Pressable>
        </Pressable>
      </View>
    ),
  );

  useEffect(() => {
    getAllMusicFiles();
  }, []);
  return (
    <>
      <View>
        <Navbar icon={<BackIcon />} title="Audio" />
      </View>
      {/* <AddButton /> */}
      {isPlay ? (
        <ActivityIndicator
          size={40}
          color={theme.colors.darkBlue}
          style={styles.indecator}
        />
      ) : (
        <>
          {audios.length > 0 ? (
            <FlatList
              data={audios}
              style={{backgroundColor: theme.colors.whiteColor}}
              renderItem={({item}) => (
                <RenderAudioItem
                  item={item}
                  playingFile={playingFile}
                  toggleAudio={toggleAudio}
                />
              )}
            />
          ) : (
            <View style={styles.noRecordView}>
              <Text style={styles.noRecordText}>No Audio Found</Text>
            </View>
          )}
        </>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  indecator: {
    position: 'absolute',
    left: '45%',
    top: '50%',
  },
  noRecordView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.whiteColor,
  },
  noRecordText: {
    textAlign: 'center',
    width: '100%',
    fontSize: 18,
    fontFamily: theme.fonts.NunitoSemiBold,
    color: theme.colors.blackColor,
  },
});

export default AudioPage;
