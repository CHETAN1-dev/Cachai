import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BellIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      d="M13.699 28.116h5.333c0 1.466-1.2 2.666-2.667 2.666a2.675 2.675 0 0 1-2.666-2.666Zm14.666-2.667v1.333h-24V25.45l2.667-2.667v-8c0-4.133 2.667-7.733 6.667-8.933v-.4c0-1.467 1.2-2.667 2.666-2.667 1.467 0 2.667 1.2 2.667 2.667v.4c4 1.2 6.667 4.8 6.667 8.933v8l2.666 2.667Zm-5.333-10.667c0-3.733-2.933-6.666-6.667-6.666-3.733 0-6.666 2.933-6.666 6.666v9.334h13.333v-9.334Z"
    />
  </Svg>
);
export default BellIcon;
