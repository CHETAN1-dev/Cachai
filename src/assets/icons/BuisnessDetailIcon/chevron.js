import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const ChevronIcon = props => (
  <Svg
    width={25}
    height={26}
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_d_40_226)">
      <Path
        d="M9.09 16.58L13.67 12L9.09 7.41L10.5 6L16.5 12L10.5 18L9.09 16.58Z"
        fill="black"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default ChevronIcon;
