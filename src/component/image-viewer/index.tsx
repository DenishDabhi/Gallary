import {View, Modal, TouchableOpacity, Image, BackHandler} from 'react-native';
import React, {useEffect} from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import ClearIcon from '../../icon/clear-icon';
import Swiper from 'react-native-swiper';
import {theme} from '../../theme/theme';

//When you click on an image, the image model that opens is its component
const ImageViewerComp = ({
  visible,
  onRequestClose,
  imageIndex,
  onImageIndexChange,
  url,
  indexOf,
}: {
  visible: boolean;
  onRequestClose: () => void;
  imageIndex?: number;
  onImageIndexChange?: () => void;
  url: [{url: string}];
  indexOf: any;
}) => {
  // console.log(url);

  useEffect(() => {
    const backHandler = () => {
      if (visible) {
        onRequestClose();
        return true;
      }
      return false;
    };
    const backhndler = BackHandler.addEventListener(
      'hardwareBackPress',
      backHandler,
    );
    return () => backhndler.remove();
  }, [visible]);

  return (
    // <Modal
    //   transparent={false}
    //   visible={visible}
    //   presentationStyle={'overFullScreen'}
    //   animationType={'fade'}
    //   onRequestClose={onRequestClose}
    //   supportedOrientations={['portrait', 'landscape']}
    //   hardwareAccelerated>
    //   <View
    //     style={{
    //       flex: 1,
    //       backgroundColor: '#000',
    //     }}>
    //     <TouchableOpacity
    //       style={{position: 'absolute', top: 40, right: 20, zIndex: 1}}
    //       activeOpacity={0.8}
    //       onPress={onRequestClose}>
    //       <ClearIcon />
    //     </TouchableOpacity>
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 0,
          right: 10,
          justifyContent: 'center',
          zIndex: 1,
          height: 50,
          width: '100%',
          alignItems:'flex-end',
        }}
        activeOpacity={0.8}
        onPress={onRequestClose}>
        <ClearIcon color={theme.colors.whiteColor} />
      </TouchableOpacity>
      <Swiper loop={false} index={indexOf} showsPagination={false}>
        {/* <ImageViewer
          imageUrls={url}
          index={indexOf}
          onChange={onImageIndexChange}
          saveToLocalByLongPress={false}
          key={imageIndex}
          onSwipeDown={onRequestClose}
          enableSwipeDown={true}
          backgroundColor={'#000'}
          doubleClickInterval={200}
          renderIndicator={() => <View />}
        /> */}
        {url.map((item, index) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.colors.blackColor,
            }}
            key={index}>
            <Image
              source={{uri: item.url}}
              style={{width: '100%', height: '100%', resizeMode: 'contain'}}
            />
          </View>
        ))}
      </Swiper>
    </View>
    // </Modal>
  );
};

export default ImageViewerComp;
