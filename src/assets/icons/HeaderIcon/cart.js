import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const CartIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      d="M23.446 24.116a2.667 2.667 0 1 1-2.667 2.666 2.657 2.657 0 0 1 2.667-2.666ZM2.112 2.782h4.36L7.726 5.45h19.72a1.333 1.333 0 0 1 1.333 1.333c0 .227-.067.454-.16.667l-4.773 8.627a2.68 2.68 0 0 1-2.334 1.373H11.58l-1.2 2.173-.04.16a.333.333 0 0 0 .333.334h15.44v2.666h-16c-1.48 0-2.666-1.2-2.666-2.666 0-.467.12-.907.32-1.28l1.813-3.267-4.8-10.12H2.112V2.782Zm8 21.334a2.667 2.667 0 1 1-2.666 2.666 2.657 2.657 0 0 1 2.666-2.666Zm12-9.334 3.707-6.666H8.966l3.146 6.666h10Z"
    />
  </Svg>
);
export default CartIcon;
