import * as React from 'react';
import Svg, {G, Circle, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const BackIcon = props => (
  <Svg
    width={42}
    height={45}
    viewBox="0 0 42 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_d_40_194)">
      <Circle cx={21} cy={20} r={12} fill="white" />
      <Path
        d="M4.33333 20C4.33333 15.5797 6.08928 11.3405 9.21489 8.21489C12.3405 5.08928 16.5797 3.33334 21 3.33334C23.1887 3.33334 25.356 3.76443 27.3781 4.60201C29.4001 5.43959 31.2375 6.66725 32.7851 8.21489C34.3328 9.76253 35.5604 11.5999 36.398 13.6219C37.2356 15.644 37.6667 17.8113 37.6667 20C37.6667 24.4203 35.9107 28.6595 32.7851 31.7851C29.6595 34.9107 25.4203 36.6667 21 36.6667C18.8113 36.6667 16.644 36.2356 14.6219 35.398C12.5998 34.5604 10.7625 33.3328 9.21489 31.7851C6.08928 28.6595 4.33333 24.4203 4.33333 20ZM31 18.3333H17.6667L23.5 12.5L21.1333 10.1333L11.2667 20L21.1333 29.8667L23.5 27.5L17.6667 21.6667H31V18.3333Z"
        fill="#159B9E"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default BackIcon;
