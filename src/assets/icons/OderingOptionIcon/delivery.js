import * as React from "react";
import Svg, { G, Rect, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const DeliveryIcon = (props) => (
  <Svg
    width={82}
    height={73}
    viewBox="0 0 82 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_d_40_243)">
      <Rect
        x={4}
        width={74}
        height={65}
        rx={20}
        fill="#159B9E"
        shapeRendering="crispEdges"
      />
      <Path
        d="M50.775 16.5C50.4917 15.65 49.6417 15.0833 48.7917 15.0833H33.2083C32.2167 15.0833 31.5083 15.65 31.225 16.5L28.25 25V36.3333C28.25 37.0416 28.9583 37.75 29.6667 37.75H31.0833C31.9333 37.75 32.5 37.0416 32.5 36.3333V34.9166H49.5V36.3333C49.5 37.0416 50.2083 37.75 50.9167 37.75H52.3333C53.0417 37.75 53.75 37.0416 53.75 36.3333V25L50.775 16.5ZM33.6333 17.9166H48.225L49.7833 22.1666H32.2167L33.6333 17.9166ZM50.9167 32.0833H31.0833V25H50.9167V32.0833ZM34.625 26.4166C35.7583 26.4166 36.75 27.4083 36.75 28.5416C36.75 29.675 35.7583 30.6666 34.625 30.6666C33.4917 30.6666 32.5 29.675 32.5 28.5416C32.5 27.4083 33.4917 26.4166 34.625 26.4166ZM47.375 26.4166C48.5083 26.4166 49.5 27.4083 49.5 28.5416C49.5 29.675 48.5083 30.6666 47.375 30.6666C46.2417 30.6666 45.25 29.675 45.25 28.5416C45.25 27.4083 46.2417 26.4166 47.375 26.4166Z"
        fill="white"
      />
      <Path
        d="M18.1123 55V46.12H20.9923C21.7043 46.12 22.3243 46.248 22.8523 46.504C23.3803 46.752 23.8203 47.088 24.1723 47.512C24.5243 47.936 24.7883 48.412 24.9643 48.94C25.1403 49.468 25.2283 50.008 25.2283 50.56C25.2283 51.112 25.1403 51.652 24.9643 52.18C24.7883 52.708 24.5243 53.184 24.1723 53.608C23.8203 54.032 23.3803 54.372 22.8523 54.628C22.3243 54.876 21.7043 55 20.9923 55H18.1123ZM20.9443 47.152H19.2883V53.968H20.9443C21.4643 53.968 21.9163 53.872 22.3003 53.68C22.6923 53.488 23.0163 53.232 23.2723 52.912C23.5363 52.584 23.7323 52.216 23.8603 51.808C23.9883 51.4 24.0523 50.984 24.0523 50.56C24.0523 50.136 23.9883 49.72 23.8603 49.312C23.7323 48.904 23.5363 48.54 23.2723 48.22C23.0163 47.892 22.6923 47.632 22.3003 47.44C21.9163 47.248 21.4643 47.152 20.9443 47.152ZM29.6148 55.12C29.0948 55.12 28.6428 55.028 28.2588 54.844C27.8828 54.652 27.5708 54.396 27.3228 54.076C27.0828 53.756 26.9028 53.404 26.7828 53.02C26.6628 52.628 26.6028 52.228 26.6028 51.82C26.6028 51.42 26.6588 51.024 26.7708 50.632C26.8908 50.24 27.0708 49.884 27.3108 49.564C27.5588 49.244 27.8668 48.992 28.2348 48.808C28.6108 48.616 29.0548 48.52 29.5668 48.52C30.1108 48.52 30.5908 48.644 31.0068 48.892C31.4228 49.14 31.7508 49.508 31.9908 49.996C32.2308 50.484 32.3508 51.096 32.3508 51.832V52.168H27.7548C27.7788 52.528 27.8628 52.86 28.0068 53.164C28.1588 53.46 28.3708 53.7 28.6428 53.884C28.9148 54.06 29.2388 54.148 29.6148 54.148C29.9428 54.148 30.2068 54.096 30.4068 53.992C30.6148 53.88 30.7788 53.752 30.8988 53.608C31.0188 53.464 31.0988 53.34 31.1388 53.236C31.1868 53.124 31.2108 53.068 31.2108 53.068H32.2788C32.2788 53.068 32.2588 53.14 32.2188 53.284C32.1788 53.42 32.1068 53.588 32.0028 53.788C31.8988 53.988 31.7468 54.192 31.5468 54.4C31.3468 54.6 31.0908 54.772 30.7788 54.916C30.4668 55.052 30.0788 55.12 29.6148 55.12ZM27.7668 51.28H31.2348C31.2188 50.864 31.1308 50.528 30.9708 50.272C30.8108 50.008 30.6068 49.812 30.3588 49.684C30.1108 49.556 29.8468 49.492 29.5668 49.492C29.0628 49.492 28.6508 49.656 28.3308 49.984C28.0108 50.304 27.8228 50.736 27.7668 51.28ZM34.0264 55L34.0384 45.88H35.1664V55H34.0264ZM37.709 47.428C37.493 47.428 37.313 47.356 37.169 47.212C37.033 47.068 36.965 46.896 36.965 46.696C36.965 46.488 37.033 46.312 37.169 46.168C37.313 46.024 37.493 45.952 37.709 45.952C37.917 45.952 38.093 46.024 38.237 46.168C38.381 46.312 38.453 46.488 38.453 46.696C38.453 46.896 38.381 47.068 38.237 47.212C38.093 47.356 37.917 47.428 37.709 47.428ZM37.145 55V48.64H38.285V55H37.145ZM42.1331 55L39.7091 48.64H40.8971L42.7571 53.608L44.5811 48.64H45.7811L43.3451 55H42.1331ZM49.7008 55.12C49.1808 55.12 48.7288 55.028 48.3448 54.844C47.9688 54.652 47.6568 54.396 47.4088 54.076C47.1688 53.756 46.9888 53.404 46.8688 53.02C46.7488 52.628 46.6888 52.228 46.6888 51.82C46.6888 51.42 46.7448 51.024 46.8568 50.632C46.9768 50.24 47.1568 49.884 47.3968 49.564C47.6448 49.244 47.9528 48.992 48.3208 48.808C48.6968 48.616 49.1408 48.52 49.6528 48.52C50.1968 48.52 50.6768 48.644 51.0928 48.892C51.5088 49.14 51.8368 49.508 52.0768 49.996C52.3168 50.484 52.4368 51.096 52.4368 51.832V52.168H47.8408C47.8648 52.528 47.9488 52.86 48.0928 53.164C48.2448 53.46 48.4568 53.7 48.7288 53.884C49.0008 54.06 49.3248 54.148 49.7008 54.148C50.0288 54.148 50.2928 54.096 50.4928 53.992C50.7008 53.88 50.8648 53.752 50.9848 53.608C51.1048 53.464 51.1848 53.34 51.2248 53.236C51.2728 53.124 51.2968 53.068 51.2968 53.068H52.3648C52.3648 53.068 52.3448 53.14 52.3047 53.284C52.2648 53.42 52.1928 53.588 52.0888 53.788C51.9848 53.988 51.8328 54.192 51.6328 54.4C51.4328 54.6 51.1768 54.772 50.8648 54.916C50.5528 55.052 50.1648 55.12 49.7008 55.12ZM47.8528 51.28H51.3208C51.3048 50.864 51.2168 50.528 51.0568 50.272C50.8968 50.008 50.6928 49.812 50.4448 49.684C50.1968 49.556 49.9328 49.492 49.6528 49.492C49.1488 49.492 48.7368 49.656 48.4168 49.984C48.0968 50.304 47.9088 50.736 47.8528 51.28ZM53.9923 55V48.64H55.1323V49.432H55.1803C55.3163 49.192 55.5163 48.98 55.7803 48.796C56.0443 48.612 56.4163 48.52 56.8963 48.52C57.0323 48.52 57.1563 48.528 57.2683 48.544C57.3803 48.552 57.4363 48.556 57.4363 48.556V49.648C57.4363 49.648 57.3723 49.644 57.2443 49.636C57.1243 49.62 56.9963 49.612 56.8603 49.612C56.3083 49.612 55.8803 49.772 55.5763 50.092C55.2803 50.404 55.1323 50.916 55.1323 51.628V55H53.9923ZM58.9316 57.34C58.7476 57.34 58.5916 57.332 58.4636 57.316C58.3356 57.3 58.2716 57.292 58.2716 57.292V56.32C58.2716 56.32 58.3356 56.324 58.4636 56.332C58.5996 56.348 58.7436 56.356 58.8956 56.356C59.3676 56.356 59.7516 56.256 60.0476 56.056C60.3516 55.864 60.6076 55.544 60.8156 55.096L58.3556 48.64H59.5436L61.3796 53.608L63.2276 48.64H64.4276L61.9676 55.012C61.6556 55.812 61.2516 56.4 60.7556 56.776C60.2676 57.152 59.6596 57.34 58.9316 57.34Z"
        fill="white"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default DeliveryIcon;
