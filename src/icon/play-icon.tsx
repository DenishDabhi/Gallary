import React from 'react';
import {Path, Svg} from 'react-native-svg';
import {theme} from '../theme/theme';
const PlayIcon = ({
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
      <Path d="M320-273v-414q0-17 12-28.5t28-11.5q5 0 10.5 1.5T381-721l326 207q9 6 13.5 15t4.5 19q0 10-4.5 19T707-446L381-239q-5 3-10.5 4.5T360-233q-16 0-28-11.5T320-273Zm80-207Zm0 134 210-134-210-134v268Z" />
    </Svg>
  );
};

export default PlayIcon;
