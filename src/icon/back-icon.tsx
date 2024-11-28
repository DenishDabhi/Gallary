import React from 'react';
import {Path, Svg} from 'react-native-svg';
const BackIcon = ({
  height,
  width,
  color,
}: {
  height?: number;
  width?: number;
  color?: string;
}) => {
  return (
    <Svg
      height={height ?? 30}
      viewBox="0 -960 960 960"
      width={width ?? 30}
      fill={color ?? '#e8eaed'}>
      <Path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
    </Svg>
  );
};

export default BackIcon;
