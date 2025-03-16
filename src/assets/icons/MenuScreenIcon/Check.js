import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
const Check = (props) => (
  <Svg
    width={32}
    height={32}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={50} cy={50} r={50} fill="#159B9E" />
    <Path
      d="M30 50L45 65L70 35"
      stroke="white"
      strokeWidth={8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Check;
