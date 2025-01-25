import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const StoreIcon = props => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.5 18H6.5V14H12.5M21.5 14V12L20.5 7H4.5L3.5 12V14H4.5V20H14.5V14H18.5V20H20.5V14M20.5 4H4.5V6H20.5V4Z"
      fill="black"
    />
  </Svg>
);
export default StoreIcon;
