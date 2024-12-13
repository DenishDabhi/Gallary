import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {theme} from '../theme/theme';
const ClearIcon = ({
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
      fill={color ?? theme.colors.blackColor}>
      <Path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z" />
    </Svg>
  );
};

export default ClearIcon;
