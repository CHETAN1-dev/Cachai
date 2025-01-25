import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const DogIcon = props => (
  <Svg
    width={25}
    height={24}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M19.5 3L15.5 7L18.5 10L19.5 9L20.5 10L22.5 8L19.5 5V3ZM3.5 7L2.5 8L5.5 11V14L4.5 15V21H6.5V18L8.5 15H15.5V21H17.5V11L14.5 8L13.5 9H5.5L3.5 7Z"
      fill="black"
    />
  </Svg>
);
export default DogIcon;
