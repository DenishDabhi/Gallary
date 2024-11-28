import React from 'react';
import {Path, Svg} from 'react-native-svg';
const RightIcon = ({
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
      fill={color ?? '#000'}>
      <Path d="m381-240 424-424-57-56-368 367-169-170-57 57 227 226Zm0 113L42-466l169-170 170 170 366-367 172 168-538 538Z" />
    </Svg>
  );
};

export default RightIcon;
