import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ForkIcon = props => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11.5 9H9.5V2H7.5V9H5.5V2H3.5V9C3.5 11.12 5.16 12.84 7.25 12.97V22H9.75V12.97C11.84 12.84 13.5 11.12 13.5 9V2H11.5V9ZM16.5 6V14H19V22H21.5V2C18.74 2 16.5 4.24 16.5 6Z"
      fill="black"
    />
  </Svg>
);
export default ForkIcon;
