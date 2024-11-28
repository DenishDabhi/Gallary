import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { CameraRoll } from '@react-native-camera-roll/camera-roll';
import Video from 'react-native-video';
import Navbar from '../../../component/go-back-navbar';
import BackIcon from '../../../icon/back-icon';
import AddButton from '../../../component/add-button';

const VideoPage = () => {
  const [videos, setVideos] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestPermission();
    }
    loadVideos();
  }, []);

  // Requesting permission to access storage
  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Access Photos and Videos',
          message: 'We need access to your gallery to display videos.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Load videos from gallery
  const loadVideos = async () => {
    setIsLoading(true);
    try {
      const result = await CameraRoll.getPhotos({
        first: 10,
        assetType: 'Videos',
      });
      setVideos(result.edges);
    } catch (error) {
      console.error('Error loading videos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Render each video in a grid
  const renderVideoItem = ({ item, index }: any) => (
    <View style={styles.videoItem}>
      <TouchableOpacity>
        <Video
          source={{ uri: item.node.image.uri }} // Video URI
          style={styles.video}
          automaticallyWaitsToMinimizeStalling={false}
          controls={true} // Show video controls
          resizeMode="contain" // Adjust the video size within the container
          
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View>
        <Navbar icon={<BackIcon />} title="Videos" />
      </View>
      <AddButton />
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={videos}
            renderItem={renderVideoItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3} // Create 3 columns for the grid layout
            columnWrapperStyle={styles.columnWrapper} // Adjust column styling
            contentContainerStyle={styles.contentContainer} // Add some padding
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 10,
    gap:10
  },
  videoItem: {
    flex: 1,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: 120, // Adjust video height as per your needs
    backgroundColor: 'black',
  },
});

export default VideoPage;
