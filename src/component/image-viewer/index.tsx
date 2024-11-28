import {View, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import ImageViewer from 'react-native-image-zoom-viewer';
import ClearIcon from '../../icon/clear-icon';

//When you click on an image, the image model that opens is its component
const ImageViewerComp = ({
  visible,
  onRequestClose,
  imageIndex,
  onImageIndexChange,
  url,
}: {
  visible: boolean;
  onRequestClose: () => void;
  imageIndex?: number;
  onImageIndexChange?: () => void;
  url: [{url:string}];
}) => {
    // console.log(url);
    
  return (
    <Modal
      transparent={false}
      visible={visible}
      presentationStyle={'overFullScreen'}
      animationType={'fade'}
      onRequestClose={onRequestClose}
      supportedOrientations={['portrait', 'landscape']}
      hardwareAccelerated>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000',
        }}>
        <TouchableOpacity
          style={{position: 'absolute', top: 40, right: 20, zIndex: 1}}
          activeOpacity={0.8}
          onPress={onRequestClose}>
          <ClearIcon />
        </TouchableOpacity>

        <ImageViewer
          imageUrls={url}
          index={imageIndex ?? 0}
          onChange={onImageIndexChange}
          saveToLocalByLongPress={false}
          onSwipeDown={onRequestClose}
          enableSwipeDown={true}
          backgroundColor={'#000'}
          doubleClickInterval={200}
          renderIndicator={() => <View />}
        />
      </View>
    </Modal>
  );
};

export default ImageViewerComp;
