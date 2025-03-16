import * as React from "react";
import Svg, { Path } from "react-native-svg";
const BackIcon = ({color = 'white' , ...props}) => (
  <Svg
    width={33}
    height={32}
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M27.4598 14.6667V17.3333H11.4598L18.7932 24.6667L16.8998 26.56L6.33984 16L16.8998 5.44L18.7932 7.33334L11.4598 14.6667H27.4598Z"
      fill={color}
    />
  </Svg>
);
export default BackIcon;

