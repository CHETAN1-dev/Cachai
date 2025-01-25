import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const EarlyIcon = props => (
  <Svg
    width={82}
    height={73}
    viewBox="0 0 82 73"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_d_40_251)">
      <Rect
        x={4}
        width={74}
        height={65}
        rx={20}
        fill="#159B9E"
        shapeRendering="crispEdges"
      />
      <Path
        d="M41.0006 31.4667C42.0554 31.4667 43.0866 31.1539 43.9636 30.5679C44.8407 29.9819 45.5243 29.1489 45.928 28.1744C46.3316 27.1998 46.4372 26.1275 46.2315 25.0929C46.0257 24.0583 45.5177 23.108 44.7718 22.3621C44.026 21.6163 43.0756 21.1083 42.0411 20.9025C41.0065 20.6967 39.9342 20.8024 38.9596 21.206C37.9851 21.6097 37.1521 22.2933 36.5661 23.1703C35.9801 24.0474 35.6673 25.0786 35.6673 26.1334C35.6688 27.5474 36.2312 28.903 37.2311 29.9029C38.2309 30.9028 39.5866 31.4652 41.0006 31.4667ZM41.0006 21.8667C41.8445 21.8667 42.6694 22.117 43.371 22.5858C44.0727 23.0546 44.6196 23.721 44.9425 24.5006C45.2654 25.2802 45.3499 26.1381 45.1853 26.9658C45.0207 27.7934 44.6143 28.5537 44.0176 29.1504C43.4209 29.7471 42.6606 30.1534 41.833 30.3181C41.0053 30.4827 40.1474 30.3982 39.3678 30.0753C38.5882 29.7523 37.9218 29.2055 37.453 28.5038C36.9842 27.8022 36.7339 26.9773 36.7339 26.1334C36.7352 25.0022 37.1851 23.9177 37.985 23.1178C38.7849 22.3179 39.8694 21.868 41.0006 21.8667Z"
        fill="white"
      />
      <Path
        d="M41.0009 27.7331C40.8595 27.7331 40.7238 27.6769 40.6238 27.5769C40.5238 27.4769 40.4676 27.3412 40.4676 27.1998C40.4676 27.0583 40.4114 26.9227 40.3114 26.8227C40.2113 26.7226 40.0757 26.6664 39.9342 26.6664C39.7928 26.6664 39.6571 26.7226 39.5571 26.8227C39.4571 26.9227 39.4009 27.0583 39.4009 27.1998C39.4023 27.5295 39.5055 27.8508 39.6964 28.1196C39.8874 28.3885 40.1567 28.5917 40.4676 28.7016V29.3331C40.4676 29.4746 40.5238 29.6102 40.6238 29.7102C40.7238 29.8103 40.8595 29.8664 41.0009 29.8664C41.1424 29.8664 41.278 29.8103 41.378 29.7102C41.4781 29.6102 41.5342 29.4746 41.5342 29.3331V28.7016C41.8898 28.5764 42.1896 28.3294 42.3805 28.0043C42.5713 27.6792 42.641 27.2971 42.5771 26.9256C42.5132 26.554 42.3199 26.2171 42.0314 25.9744C41.7429 25.7318 41.3779 25.5991 41.0009 25.5998C40.8954 25.5998 40.7923 25.5685 40.7046 25.5099C40.6169 25.4513 40.5485 25.368 40.5082 25.2705C40.4678 25.1731 40.4572 25.0659 40.4778 24.9624C40.4984 24.8589 40.5492 24.7639 40.6238 24.6893C40.6984 24.6147 40.7934 24.5639 40.8969 24.5434C41.0003 24.5228 41.1076 24.5333 41.205 24.5737C41.3025 24.6141 41.3858 24.6824 41.4444 24.7701C41.503 24.8578 41.5342 24.961 41.5342 25.0664C41.5342 25.2079 41.5904 25.3436 41.6905 25.4436C41.7905 25.5436 41.9261 25.5998 42.0676 25.5998C42.209 25.5998 42.3447 25.5436 42.4447 25.4436C42.5447 25.3436 42.6009 25.2079 42.6009 25.0664C42.5995 24.7367 42.4963 24.4154 42.3054 24.1466C42.1145 23.8778 41.8451 23.6745 41.5342 23.5646V22.9331C41.5342 22.7917 41.4781 22.656 41.378 22.556C41.278 22.456 41.1424 22.3998 41.0009 22.3998C40.8595 22.3998 40.7238 22.456 40.6238 22.556C40.5238 22.656 40.4676 22.7917 40.4676 22.9331V23.5646C40.112 23.6898 39.8122 23.9369 39.6214 24.2619C39.4305 24.587 39.3608 24.9692 39.4247 25.3407C39.4886 25.7122 39.6819 26.0491 39.9704 26.2918C40.2589 26.5344 40.6239 26.6672 41.0009 26.6664C41.1424 26.6664 41.278 26.7226 41.378 26.8227C41.4781 26.9227 41.5342 27.0583 41.5342 27.1998C41.5342 27.3412 41.4781 27.4769 41.378 27.5769C41.278 27.6769 41.1424 27.7331 41.0009 27.7331Z"
        fill="white"
      />
      <Path
        d="M55.5163 26.1333H52.0603C51.2491 23.487 49.7162 21.1192 47.6336 19.296L44.6704 16.7029C44.9002 16.5197 45.0746 16.2762 45.174 15.9997C45.2735 15.7232 45.2942 15.4244 45.2338 15.1368C45.1734 14.8492 45.0343 14.584 44.832 14.3708C44.6297 14.1577 44.3721 14.0049 44.088 13.9296L46.7776 9.89547C46.8418 9.79933 46.8731 9.68493 46.8666 9.5695C46.8602 9.45407 46.8164 9.34386 46.7419 9.25547C46.7285 9.24053 46.7115 9.23147 46.6971 9.2176L46.7013 9.21333C45.8798 8.43936 44.7953 8.00576 43.6667 8C42.7761 8.00165 41.9072 8.27436 41.1755 8.78187C39.5195 8.0576 37.8 7.33173 35.3467 9.17333C35.2376 9.25514 35.1639 9.37563 35.1409 9.51003C35.1179 9.64444 35.1473 9.78256 35.2229 9.896L37.9125 13.9301C37.6561 13.9977 37.4208 14.1286 37.2282 14.3108C37.0356 14.493 36.8918 14.7207 36.8102 14.973C36.7285 15.2252 36.7115 15.494 36.7608 15.7545C36.8101 16.015 36.9241 16.259 37.0923 16.464L34.568 18.8203L35.2965 19.5995L38.0101 17.0667H43.4661L46.9328 20.0987C48.7818 21.7181 50.1656 23.8012 50.9419 26.1333H48.8837C48.4904 26.1338 48.1132 26.2902 47.835 26.5684C47.5569 26.8465 47.4004 27.2237 47.4 27.6171V28.9163C47.4015 29.265 47.5271 29.6019 47.7541 29.8667C47.5271 30.1314 47.4015 30.4683 47.4 30.8171V32.1163C47.4022 32.2726 47.4292 32.4276 47.48 32.5755C47.1547 32.6514 46.8646 32.8349 46.6565 33.0962C46.4484 33.3576 46.3345 33.6814 46.3333 34.0155V35.3147C46.3345 35.6487 46.4484 35.9726 46.6565 36.2339C46.8646 36.4952 47.1547 36.6787 47.48 36.7547C47.4292 36.9025 47.4022 37.0575 47.4 37.2139V38.5131C47.4024 38.5756 47.4087 38.6379 47.4187 38.6997C46.8927 38.8529 46.3478 38.9316 45.8 38.9333H45.7328C45.7753 38.7983 45.7979 38.6578 45.8 38.5163V37.2171C45.7985 36.8683 45.6729 36.5314 45.4459 36.2667C45.6729 36.0019 45.7985 35.6651 45.8 35.3163V34.0171C45.7996 33.6237 45.6431 33.2465 45.365 32.9684C45.0868 32.6902 44.7096 32.5338 44.3163 32.5333H37.6837C37.2904 32.5338 36.9132 32.6902 36.635 32.9684C36.3569 33.2465 36.2004 33.6237 36.2 34.0171V35.3163C36.2015 35.6651 36.3271 36.0019 36.5541 36.2667C36.3271 36.5314 36.2015 36.8683 36.2 37.2171V38.5163C36.2021 38.6578 36.2247 38.7983 36.2672 38.9333H36.2C35.6523 38.9326 35.1075 38.855 34.5813 38.7029C34.5913 38.6411 34.5976 38.5788 34.6 38.5163V37.2171C34.5978 37.0607 34.5708 36.9057 34.52 36.7579C34.8453 36.6819 35.1354 36.4984 35.3435 36.2371C35.5516 35.9758 35.6655 35.6519 35.6667 35.3179V34.0171C35.6655 33.683 35.5516 33.3592 35.3435 33.0978C35.1354 32.8365 34.8453 32.653 34.52 32.5771C34.5708 32.4292 34.5978 32.2742 34.6 32.1179V30.8171C34.5985 30.4683 34.4729 30.1314 34.2459 29.8667C34.4729 29.6019 34.5985 29.265 34.6 28.9163V27.6171C34.5996 27.2237 34.4431 26.8465 34.165 26.5684C33.8868 26.2902 33.5096 26.1338 33.1163 26.1333H30.9669C31.6391 23.9689 32.8316 22.0021 34.44 20.4053L33.6933 19.6475C31.8799 21.4456 30.5578 23.6787 29.8533 26.1333H26.4837C26.0904 26.1338 25.7132 26.2902 25.435 26.5684C25.1569 26.8465 25.0004 27.2237 25 27.6171V28.9163C25.0015 29.265 25.1271 29.6019 25.3541 29.8667C25.1271 30.1314 25.0015 30.4683 25 30.8171V32.1163C25.0012 32.4503 25.1151 32.7742 25.3231 33.0355C25.5312 33.2968 25.8214 33.4803 26.1467 33.5563C26.0958 33.7041 26.0688 33.8591 26.0667 34.0155V35.3147C26.0688 35.471 26.0958 35.626 26.1467 35.7739C25.8208 35.85 25.5303 36.0339 25.3222 36.2959C25.114 36.5579 25.0005 36.8825 25 37.2171V38.5163C25.0004 38.9096 25.1569 39.2868 25.435 39.565C25.7132 39.8431 26.0904 39.9996 26.4837 40H33.1163C33.4596 39.9986 33.7915 39.8769 34.0544 39.656C34.747 39.883 35.4711 39.9991 36.2 40H45.8C46.5289 39.9991 47.253 39.883 47.9456 39.656C48.2085 39.8769 48.5404 39.9986 48.8837 40H55.5163C55.9096 39.9996 56.2868 39.8431 56.565 39.565C56.8431 39.2868 56.9996 38.9096 57 38.5163V37.2171C56.9988 36.883 56.8849 36.5592 56.6769 36.2978C56.4688 36.0365 56.1786 35.853 55.8533 35.7771C55.9042 35.6292 55.9312 35.4742 55.9333 35.3179V34.0171C55.9312 33.8607 55.9042 33.7057 55.8533 33.5579C56.1786 33.4819 56.4688 33.2984 56.6769 33.0371C56.8849 32.7758 56.9988 32.4519 57 32.1179V30.8171C56.9985 30.4683 56.8729 30.1314 56.6459 29.8667C56.8729 29.6019 56.9985 29.265 57 28.9163V27.6171C56.9996 27.2237 56.8431 26.8465 56.565 26.5684C56.2868 26.2902 55.9096 26.1338 55.5163 26.1333ZM45.1835 9.44C44.2811 9.67184 43.3295 9.62309 42.4555 9.30027C42.8408 9.14636 43.2518 9.06709 43.6667 9.06667C44.1941 9.07395 44.7129 9.20164 45.1835 9.44ZM40.7925 9.78027C41.992 10.3056 43.3163 10.8869 45.0501 10.5653L42.848 13.8667H39.152L36.4 9.73867C38.1461 8.61973 39.3264 9.136 40.7925 9.77867V9.78027ZM38.3333 16C38.1919 16 38.0562 15.9438 37.9562 15.8438C37.8562 15.7438 37.8 15.6081 37.8 15.4667C37.8 15.3252 37.8562 15.1896 37.9562 15.0895C38.0562 14.9895 38.1919 14.9333 38.3333 14.9333H43.6667C43.8081 14.9333 43.9438 14.9895 44.0438 15.0895C44.1438 15.1896 44.2 15.3252 44.2 15.4667C44.2 15.6081 44.1438 15.7438 44.0438 15.8438C43.9438 15.9438 43.8081 16 43.6667 16H38.3333ZM34.6 35.3163C34.5999 35.4268 34.5559 35.5328 34.4777 35.611C34.3995 35.6892 34.2935 35.7332 34.1829 35.7333H27.5504C27.4398 35.7332 27.3338 35.6892 27.2556 35.611C27.1775 35.5328 27.1335 35.4268 27.1333 35.3163V34.0171C27.1335 33.9065 27.1775 33.8005 27.2556 33.7223C27.3338 33.6441 27.4398 33.6001 27.5504 33.6H28.2V34.6667H29.2667V33.6H30.3333V34.6667H31.4V33.6H32.4667V34.6667H33.5333V33.6H34.1829C34.2935 33.6001 34.3995 33.6441 34.4777 33.7223C34.5559 33.8005 34.5999 33.9065 34.6 34.0171V35.3163ZM26.0667 27.6171C26.0668 27.5065 26.1108 27.4005 26.189 27.3223C26.2672 27.2441 26.3732 27.2001 26.4837 27.2H27.1333V28.2667H28.2V27.2H29.2667V28.2667H30.3333V27.2H31.4V28.2667H32.4667V27.2H33.1163C33.2268 27.2001 33.3328 27.2441 33.411 27.3223C33.4892 27.4005 33.5332 27.5065 33.5333 27.6171V28.9163C33.5332 29.0268 33.4892 29.1328 33.411 29.211C33.3328 29.2892 33.2268 29.3332 33.1163 29.3333H26.4837C26.3732 29.3332 26.2672 29.2892 26.189 29.211C26.1108 29.1328 26.0668 29.0268 26.0667 28.9163V27.6171ZM26.0667 30.8171C26.0668 30.7065 26.1108 30.6005 26.189 30.5223C26.2672 30.4441 26.3732 30.4001 26.4837 30.4H27.1333V31.4667H28.2V30.4H29.2667V31.4667H30.3333V30.4H31.4V31.4667H32.4667V30.4H33.1163C33.2268 30.4001 33.3328 30.4441 33.411 30.5223C33.4892 30.6005 33.5332 30.7065 33.5333 30.8171V32.1163C33.5332 32.2268 33.4892 32.3328 33.411 32.411C33.3328 32.4892 33.2268 32.5332 33.1163 32.5333H26.4837C26.3732 32.5332 26.2672 32.4892 26.189 32.411C26.1108 32.3328 26.0668 32.2268 26.0667 32.1163V30.8171ZM33.5333 38.5163C33.5332 38.6268 33.4892 38.7328 33.411 38.811C33.3328 38.8892 33.2268 38.9332 33.1163 38.9333H26.4837C26.3732 38.9332 26.2672 38.8892 26.189 38.811C26.1108 38.7328 26.0668 38.6268 26.0667 38.5163V37.2171C26.0668 37.1065 26.1108 37.0005 26.189 36.9223C26.2672 36.8441 26.3732 36.8001 26.4837 36.8H27.1333V37.8667H28.2V36.8H29.2667V37.8667H30.3333V36.8H31.4V37.8667H32.4667V36.8H33.1163C33.2268 36.8001 33.3328 36.8441 33.411 36.9223C33.4892 37.0005 33.5332 37.1065 33.5333 37.2171V38.5163ZM37.2667 34.0171C37.2668 33.9065 37.3108 33.8005 37.389 33.7223C37.4672 33.6441 37.5732 33.6001 37.6837 33.6H38.3333V34.6667H39.4V33.6H40.4667V34.6667H41.5333V33.6H42.6V34.6667H43.6667V33.6H44.3163C44.4268 33.6001 44.5328 33.6441 44.611 33.7223C44.6892 33.8005 44.7332 33.9065 44.7333 34.0171V35.3163C44.7332 35.4268 44.6892 35.5328 44.611 35.611C44.5328 35.6892 44.4268 35.7332 44.3163 35.7333H37.6837C37.5732 35.7332 37.4672 35.6892 37.389 35.611C37.3108 35.5328 37.2668 35.4268 37.2667 35.3163V34.0171ZM37.6837 38.9333C37.5732 38.9332 37.4672 38.8892 37.389 38.811C37.3108 38.7328 37.2668 38.6268 37.2667 38.5163V37.2171C37.2668 37.1065 37.3108 37.0005 37.389 36.9223C37.4672 36.8441 37.5732 36.8001 37.6837 36.8H38.3333V37.8667H39.4V36.8H40.4667V37.8667H41.5333V36.8H42.6V37.8667H43.6667V36.8H44.3163C44.4268 36.8001 44.5328 36.8441 44.611 36.9223C44.6892 37.0005 44.7332 37.1065 44.7333 37.2171V38.5163C44.7332 38.6268 44.6892 38.7328 44.611 38.811C44.5328 38.8892 44.4268 38.9332 44.3163 38.9333H37.6837ZM48.4667 27.6171C48.4668 27.5065 48.5108 27.4005 48.589 27.3223C48.6672 27.2441 48.7732 27.2001 48.8837 27.2H49.5333V28.2667H50.6V27.2H51.6667V28.2667H52.7333V27.2H53.8V28.2667H54.8667V27.2H55.5163C55.6268 27.2001 55.7328 27.2441 55.811 27.3223C55.8892 27.4005 55.9332 27.5065 55.9333 27.6171V28.9163C55.9332 29.0268 55.8892 29.1328 55.811 29.211C55.7328 29.2892 55.6268 29.3332 55.5163 29.3333H48.8837C48.7732 29.3332 48.6672 29.2892 48.589 29.211C48.5108 29.1328 48.4668 29.0268 48.4667 28.9163V27.6171ZM47.4 34.0171C47.4001 33.9065 47.4441 33.8005 47.5223 33.7223C47.6005 33.6441 47.7065 33.6001 47.8171 33.6H48.4667V34.6667H49.5333V33.6H50.6V34.6667H51.6667V33.6H52.7333V34.6667H53.8V33.6H54.4496C54.5602 33.6001 54.6662 33.6441 54.7444 33.7223C54.8225 33.8005 54.8665 33.9065 54.8667 34.0171V35.3163C54.8665 35.4268 54.8225 35.5328 54.7444 35.611C54.6662 35.6892 54.5602 35.7332 54.4496 35.7333H47.8171C47.7065 35.7332 47.6005 35.6892 47.5223 35.611C47.4441 35.5328 47.4001 35.4268 47.4 35.3163V34.0171ZM55.9333 38.5163C55.9332 38.6268 55.8892 38.7328 55.811 38.811C55.7328 38.8892 55.6268 38.9332 55.5163 38.9333H48.8837C48.7732 38.9332 48.6672 38.8892 48.589 38.811C48.5108 38.7328 48.4668 38.6268 48.4667 38.5163V37.2171C48.4668 37.1065 48.5108 37.0005 48.589 36.9223C48.6672 36.8441 48.7732 36.8001 48.8837 36.8H49.5333V37.8667H50.6V36.8H51.6667V37.8667H52.7333V36.8H53.8V37.8667H54.8667V36.8H55.5163C55.6268 36.8001 55.7328 36.8441 55.811 36.9223C55.8892 37.0005 55.9332 37.1065 55.9333 37.2171V38.5163ZM55.9333 32.1163C55.9332 32.2268 55.8892 32.3328 55.811 32.411C55.7328 32.4892 55.6268 32.5332 55.5163 32.5333H48.8837C48.7732 32.5332 48.6672 32.4892 48.589 32.411C48.5108 32.3328 48.4668 32.2268 48.4667 32.1163V30.8171C48.4668 30.7065 48.5108 30.6005 48.589 30.5223C48.6672 30.4441 48.7732 30.4001 48.8837 30.4H49.5333V31.4667H50.6V30.4H51.6667V31.4667H52.7333V30.4H53.8V31.4667H54.8667V30.4H55.5163C55.6268 30.4001 55.7328 30.4441 55.811 30.5223C55.8892 30.6005 55.9332 30.7065 55.9333 30.8171V32.1163Z"
        fill="white"
      />
      <Path
        d="M14.0401 55V46.12H19.6801V47.152H15.2161V49.96H19.1281V50.992H15.2161V53.968H19.7401V55H14.0401ZM24.0043 48.52C24.4043 48.52 24.7403 48.584 25.0123 48.712C25.2843 48.84 25.5043 48.992 25.6723 49.168C25.8403 49.336 25.9683 49.496 26.0563 49.648H26.1283V48.64H27.2683V55H26.1283V53.992H26.0563C25.9683 54.144 25.8403 54.308 25.6723 54.484C25.5043 54.66 25.2843 54.812 25.0123 54.94C24.7403 55.06 24.4043 55.12 24.0043 55.12C23.5243 55.12 23.1043 55.028 22.7443 54.844C22.3843 54.652 22.0843 54.4 21.8443 54.088C21.6043 53.768 21.4243 53.412 21.3043 53.02C21.1843 52.628 21.1243 52.228 21.1243 51.82C21.1243 51.412 21.1843 51.012 21.3043 50.62C21.4243 50.228 21.6043 49.876 21.8443 49.564C22.0843 49.244 22.3843 48.992 22.7443 48.808C23.1043 48.616 23.5243 48.52 24.0043 48.52ZM24.1963 49.492C23.7723 49.492 23.4163 49.608 23.1283 49.84C22.8403 50.064 22.6243 50.352 22.4803 50.704C22.3443 51.056 22.2763 51.428 22.2763 51.82C22.2763 52.204 22.3443 52.576 22.4803 52.936C22.6243 53.288 22.8403 53.58 23.1283 53.812C23.4163 54.036 23.7723 54.148 24.1963 54.148C24.6203 54.148 24.9723 54.036 25.2523 53.812C25.5403 53.58 25.7523 53.288 25.8883 52.936C26.0323 52.576 26.1043 52.204 26.1043 51.82C26.1043 51.428 26.0323 51.056 25.8883 50.704C25.7523 50.352 25.5403 50.064 25.2523 49.84C24.9723 49.608 24.6203 49.492 24.1963 49.492ZM28.9435 55V48.64H30.0835V49.432H30.1315C30.2675 49.192 30.4675 48.98 30.7315 48.796C30.9955 48.612 31.3675 48.52 31.8475 48.52C31.9835 48.52 32.1075 48.528 32.2195 48.544C32.3315 48.552 32.3875 48.556 32.3875 48.556V49.648C32.3875 49.648 32.3235 49.644 32.1955 49.636C32.0755 49.62 31.9475 49.612 31.8115 49.612C31.2595 49.612 30.8315 49.772 30.5275 50.092C30.2315 50.404 30.0835 50.916 30.0835 51.628V55H28.9435ZM33.7627 55L33.7747 45.88H34.9027V55H33.7627ZM36.9413 57.34C36.7573 57.34 36.6013 57.332 36.4733 57.316C36.3453 57.3 36.2813 57.292 36.2813 57.292V56.32C36.2813 56.32 36.3453 56.324 36.4733 56.332C36.6093 56.348 36.7533 56.356 36.9053 56.356C37.3773 56.356 37.7613 56.256 38.0573 56.056C38.3613 55.864 38.6173 55.544 38.8253 55.096L36.3653 48.64H37.5533L39.3893 53.608L41.2373 48.64H42.4373L39.9773 55.012C39.6653 55.812 39.2613 56.4 38.7653 56.776C38.2773 57.152 37.6693 57.34 36.9413 57.34ZM46.583 55V46.12H50.003C50.571 46.12 51.055 46.224 51.455 46.432C51.863 46.632 52.175 46.904 52.391 47.248C52.607 47.584 52.715 47.952 52.715 48.352C52.715 48.792 52.635 49.148 52.475 49.42C52.315 49.692 52.135 49.9 51.935 50.044C51.735 50.18 51.575 50.272 51.455 50.32V50.392C51.647 50.448 51.867 50.556 52.115 50.716C52.371 50.868 52.591 51.088 52.775 51.376C52.959 51.664 53.051 52.04 53.051 52.504C53.051 52.912 52.951 53.308 52.751 53.692C52.551 54.076 52.235 54.392 51.803 54.64C51.371 54.88 50.799 55 50.087 55H46.583ZM49.955 47.14H47.759V49.972H49.955C50.339 49.972 50.647 49.904 50.879 49.768C51.119 49.632 51.291 49.456 51.395 49.24C51.507 49.016 51.563 48.788 51.563 48.556C51.563 48.316 51.507 48.088 51.395 47.872C51.291 47.656 51.119 47.48 50.879 47.344C50.647 47.208 50.339 47.14 49.955 47.14ZM50.051 50.92H47.759V53.98H50.051C50.491 53.98 50.843 53.908 51.107 53.764C51.371 53.612 51.563 53.42 51.683 53.188C51.811 52.948 51.875 52.7 51.875 52.444C51.875 52.188 51.811 51.944 51.683 51.712C51.563 51.48 51.371 51.292 51.107 51.148C50.843 50.996 50.491 50.92 50.051 50.92ZM55.293 47.428C55.077 47.428 54.897 47.356 54.753 47.212C54.617 47.068 54.549 46.896 54.549 46.696C54.549 46.488 54.617 46.312 54.753 46.168C54.897 46.024 55.077 45.952 55.293 45.952C55.501 45.952 55.677 46.024 55.821 46.168C55.965 46.312 56.037 46.488 56.037 46.696C56.037 46.896 55.965 47.068 55.821 47.212C55.677 47.356 55.501 47.428 55.293 47.428ZM54.729 55V48.64H55.869V55H54.729ZM57.713 55V48.64H58.853V49.432H58.901C59.037 49.192 59.237 48.98 59.501 48.796C59.765 48.612 60.137 48.52 60.617 48.52C60.753 48.52 60.877 48.528 60.989 48.544C61.101 48.552 61.157 48.556 61.157 48.556V49.648C61.157 49.648 61.093 49.644 60.965 49.636C60.845 49.62 60.717 49.612 60.581 49.612C60.029 49.612 59.601 49.772 59.297 50.092C59.001 50.404 58.853 50.916 58.853 51.628V55H57.713ZM64.6918 55.12C64.2118 55.12 63.7918 55.028 63.4318 54.844C63.0718 54.652 62.7718 54.4 62.5318 54.088C62.2918 53.768 62.1118 53.412 61.9918 53.02C61.8718 52.628 61.8118 52.228 61.8118 51.82C61.8118 51.412 61.8718 51.012 61.9918 50.62C62.1118 50.228 62.2918 49.876 62.5318 49.564C62.7718 49.244 63.0718 48.992 63.4318 48.808C63.7918 48.616 64.2118 48.52 64.6918 48.52C65.0918 48.52 65.4278 48.584 65.6998 48.712C65.9718 48.84 66.1918 48.992 66.3598 49.168C66.5278 49.336 66.6558 49.496 66.7438 49.648H66.8158V45.88H67.9558V55H66.8158V53.992H66.7438C66.6558 54.144 66.5278 54.308 66.3598 54.484C66.1918 54.66 65.9718 54.812 65.6998 54.94C65.4278 55.06 65.0918 55.12 64.6918 55.12ZM64.8838 54.148C65.3078 54.148 65.6598 54.036 65.9398 53.812C66.2278 53.58 66.4398 53.288 66.5758 52.936C66.7198 52.576 66.7918 52.204 66.7918 51.82C66.7918 51.428 66.7198 51.056 66.5758 50.704C66.4398 50.352 66.2278 50.064 65.9398 49.84C65.6598 49.608 65.3078 49.492 64.8838 49.492C64.4598 49.492 64.1038 49.608 63.8158 49.84C63.5278 50.064 63.3118 50.352 63.1678 50.704C63.0318 51.056 62.9638 51.428 62.9638 51.82C62.9638 52.204 63.0318 52.576 63.1678 52.936C63.3118 53.288 63.5278 53.58 63.8158 53.812C64.1038 54.036 64.4598 54.148 64.8838 54.148Z"
        fill="white"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default EarlyIcon;
