import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import Navbar from '../../../component/go-back-navbar';
import BackIcon from '../../../icon/back-icon';
import ImageViewerComp from '../../../component/image-viewer';

const ImagePage = ({image}: any) => {
  const [photos, setPhotos] = useState<any>([]);
  const [load, setLoad] = useState<any>({});
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (Platform.OS === 'android') {
      requestPermission();
    }
  }, []);

  const requestPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Access Photos',
          message: 'App needs access to your photos to display images',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Storage permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleButtonPress = async () => {
    try {
      const result = await CameraRoll.getPhotos({
        first: 5, // You select how many image
        assetType: 'Photos',
        mimeTypes: ['image/png', 'image/jpg', 'image/jpeg'], // Fix typo here
      });
      setPhotos(result.edges);
    } catch (error) {
      console.error('Error Loading Images:', error);
    }
  };

  useEffect(() => {
    handleButtonPress();
  }, []);

  const handleImageLoadStart = (index: any) => {
    setLoad((prev: any) => ({...prev, [index]: true}));
  };

  const handleImageLoadEnd = (index: any) => {
    setLoad((prev: any) => ({...prev, [index]: false}));
  };

  const openImageViewer = (uri: number) => {
    setSelectedImage(uri); // Set the selected image URL
    setIsVisible(true); // Open the modal
  };

  const renderItem = ({item, index}: any) => (
    <View style={styles.imageContainer}>
      {load[index] && (
        <ActivityIndicator
          style={styles.loadingIndicator}
          size="large"
          color="#0000ff"
        />
      )}
      <TouchableOpacity onPress={() => openImageViewer(index)}>
        <Image
          style={styles.image}
          source={{uri: item.node.image.uri}}
          onLoadStart={() => handleImageLoadStart(index)} // Start loading
          onLoadEnd={() => handleImageLoadEnd(index)} // End loading
        />
      </TouchableOpacity>
    </View>
  );

  // Convert photos to the format expected by ImageViewer
  const imagesForViewer = photos.map((photo: any) => ({
    url: photo.node.image.uri,
  }));

  // console.log('selectedImage',selectedImage);

  return (
    <>
      <Navbar title="Photo" icon={<BackIcon />} />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={photos}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3} // Grid with 3 columns
          columnWrapperStyle={styles.columnWrapper} // Styling for columns
          contentContainerStyle={styles.contentContainer} // Spacing for the entire list
        />
        {selectedImage !== null && (
          <ImageViewerComp
            visible={isVisible}
            url={imagesForViewer}
            imageIndex={selectedImage}
            onRequestClose={() => {
              setIsVisible(false);
              setSelectedImage(null);
            }}
          />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'flex-start',
    marginBottom: 10,
    gap: 17,
  },
  image: {
    width: '100%',
    height: 120,
    marginBottom: 10,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 1,
    position: 'relative',
    marginBottom: 10,
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{translateX: -25}, {translateY: -25}],
  },
});

export default ImagePage;
