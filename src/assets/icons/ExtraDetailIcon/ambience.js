import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const LampIcon = props => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.5 2H16.5L20.5 14H4.5L8.5 2ZM11.5 15H13.5V20H18.5V22H6.5V20H11.5V15Z"
      fill="black"
    />
  </Svg>
);
export default LampIcon;
