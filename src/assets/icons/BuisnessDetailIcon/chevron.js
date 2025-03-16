import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ChevronIcon = ({color='white', ...props}) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.41 8.57996L12 13.17L16.59 8.57996L18 9.99996L12 16L6 9.99996L7.41 8.57996Z"
      fill={color}
    />
  </Svg>
);
export default ChevronIcon;
