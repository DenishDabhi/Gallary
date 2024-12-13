import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {theme} from '../theme/theme';
const PlayStopIcon = ({
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
      height={height ?? 24}
      viewBox="0 -960 960 960"
      width={width ?? 24}
      fill={color ?? theme.colors.blackColor}>
      <Path d="M240-320v-320q0-33 23.5-56.5T320-720h320q33 0 56.5 23.5T720-640v320q0 33-23.5 56.5T640-240H320q-33 0-56.5-23.5T240-320Zm80 0h320v-320H320v320Zm160-160Z" />
    </Svg>
  );
};

export default PlayStopIcon;
