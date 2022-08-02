import {colors} from '../../theme';
import React from 'react';
import Svg, {
  Path,
  Circle,
  Rect,
  G,
  Defs,
  ClipPath,
  LinearGradient,
  RadialGradient,
  Stop,
  Mask,
} from 'react-native-svg';

type iconProps = {
  width?: number;
  height?: number;
  iconFillColor?: string;
  style?: any;
  isActive?: boolean;
  strokeWidth?: number;
};

export const EyeIconOpen = () => (
  <Svg width={20} height={16} viewBox="0 0 24 16" fill="none">
    <Path
      d="M12 1.25C4.5 1.25 1.5 8 1.5 8s3 6.75 10.5 6.75S22.5 8 22.5 8s-3-6.75-10.5-6.75z"
      stroke={colors.primary}
      strokeOpacity={0.8}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 11a3 3 0 100-6 3 3 0 000 6z"
      stroke={colors.primary}
      strokeOpacity={0.8}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const EyeIconClose = () => (
  <Svg width={20} height={25} viewBox="0 0 24 25" fill="none">
    <Path
      d="M4.5 4.593l15 16.5M14.523 15.618a3.75 3.75 0 01-5.046-5.55"
      stroke={colors.primary}
      strokeOpacity={0.8}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.937 7.274C3.115 9.209 1.5 12.843 1.5 12.843s3 6.75 10.5 6.75c1.757.013 3.493-.392 5.062-1.181M19.557 16.696c2.044-1.83 2.943-3.853 2.943-3.853s-3-6.75-10.5-6.75a11.75 11.75 0 00-1.939.157M12.706 9.16a3.752 3.752 0 013.028 3.33"
      stroke={colors.primary}
      strokeOpacity={0.8}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const DownIcon = (props: iconProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <Path
      d="M11.375 5.25L7 9.625 2.625 5.25"
      stroke="#808190"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const CaretRight = (props: iconProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      d="M7.5 3.75L13.75 10 7.5 16.25"
      stroke={props.iconFillColor || '#B09E88'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconBack = (props: iconProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m15 18-6-6 6-6"
      stroke="#03606A"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconClear = (props: iconProps) => (
  <Svg width={18} height={19} fill="none" {...props}>
    <Circle cx={9} cy={9.655} r={7.5} fill="#C2D6DC" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.194 6.848a.661.661 0 0 0 0 .936l1.87 1.87-1.87 1.871a.662.662 0 0 0 .935.936L9 10.59l1.87 1.87a.661.661 0 1 0 .936-.935l-1.87-1.87 1.87-1.871a.661.661 0 0 0-.935-.936L9 8.72 7.13 6.85a.661.661 0 0 0-.936 0Z"
      fill="#fff"
    />
  </Svg>
);

export const IconLike = (props: iconProps) => (
  <Svg width={21} height={18} fill="none" {...props}>
    <Path
      d="m10.5 2.931-.365-.39a5.116 5.116 0 0 0-8.85 3.496L10.5 2.931Zm0 0 .365-.39m-.365.39.365-.39m0 0a5.125 5.125 0 0 1 3.734-1.62 5.123 5.123 0 0 1 5.116 5.117c0 1.265-.512 2.56-1.334 3.82-.82 1.257-1.926 2.442-3.06 3.474-2.266 2.067-4.582 3.473-4.75 3.57l-.007.004a.107.107 0 0 1-.11 0l-.008-.005m.419-14.36-.42 14.36m0 0-.008-.005m.009.005-.008-.005m0 0c-.167-.092-2.487-1.496-4.758-3.564m4.758 3.564L5.68 13.332m0 0C4.546 12.3 3.44 11.114 2.62 9.858m3.06 3.474L2.62 9.858m0 0c-.823-1.26-1.335-2.555-1.335-3.82l1.334 3.82Z"
      stroke="#FB4E4E"
    />
  </Svg>
);

export const IconShare = (props: iconProps) => (
  <Svg width={17} height={17} fill="none" {...props}>
    <G clipPath="url(#a)" fill="#03606A">
      <Path d="m16.075 5.574-4.333-4.5a.5.5 0 0 0-.86.347v2.167h-.167a6.507 6.507 0 0 0-6.5 6.5v1a.493.493 0 0 0 .5.491c.188 0 .369-.11.456-.285a5.468 5.468 0 0 1 4.919-3.04h.792v2.167a.5.5 0 0 0 .86.347l4.333-4.5a.5.5 0 0 0 0-.694Z" />
      <Path d="M14.215 16.92h-12c-1.102 0-2-.896-2-2V5.589c0-1.103.898-2 2-2h2a.666.666 0 1 1 0 1.333h-2a.667.667 0 0 0-.667.667v9.333c0 .368.3.667.667.667h12a.667.667 0 0 0 .667-.667V9.588a.666.666 0 1 1 1.333 0v5.333c0 1.103-.897 2-2 2Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.215 .92)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export const IconLocation = (props: iconProps) => (
  <Svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8 9.088a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 1.754a5.333 5.333 0 0 0-5.333 5.334c0 1.26.268 2.086 1 3l4.333 5 4.333-5c.732-.914 1-1.74 1-3A5.333 5.333 0 0 0 8 1.754v0Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const IconJob = (props: iconProps) => (
  <Svg width={16} height={17} fill="none" {...props}>
    <Path
      d="M2.963 8.77c.61.6 1.474.952 2.495.952 1.02 0 1.886-.352 2.494-.952.609-.6.977-1.464.977-2.52V2.407H7.688a.243.243 0 1 1 0-.486h1.484a.243.243 0 0 1 .243.243V6.25c0 1.173-.412 2.166-1.121 2.866-.567.559-1.312.92-2.165 1.044l-.428.062v1.043a3.658 3.658 0 0 0 7.314 0v-.852l-.346-.112a1.915 1.915 0 0 1 .588-3.737 1.916 1.916 0 0 1 .589 3.738l-.345.112v.851a4.143 4.143 0 1 1-8.286 0v-1.043l-.428-.062c-.854-.124-1.598-.485-2.166-1.044-.71-.7-1.121-1.693-1.121-2.866V2.164a.243.243 0 0 1 .243-.243h1.486a.243.243 0 1 1 0 .486H1.986V6.25c0 1.056.368 1.92.977 2.52Zm0 0 .349-.353-.349.353ZM14.27 7.47a1.429 1.429 0 1 0-2.02 2.02 1.429 1.429 0 0 0 2.02-2.02Z"
      fill="#0E3F6C"
      stroke="#0E3F6C"
    />
  </Svg>
);
export const IconCalendar = (props: iconProps) => (
  <Svg width={16} height={17} fill="none" {...props}>
    <Path
      d="M12.667 3.621H3.333c-.736 0-1.333.537-1.333 1.2v8.4c0 .663.597 1.2 1.333 1.2h9.334c.736 0 1.333-.537 1.333-1.2v-8.4c0-.663-.597-1.2-1.333-1.2Z"
      stroke="#0E3F6C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.667 2.42v2.4M5.333 2.42v2.4"
      stroke="#0E3F6C"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.667 7.221h10.666"
      stroke="#0E3F6C"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconSun = (props: iconProps) => (
  <Svg width={16} height={17} fill="none" {...props}>
    <G clipPath="url(#a)" fill="#0E3F6C" stroke="#0E3F6C" strokeWidth={0.5}>
      <Path d="M8 13.777a.546.546 0 0 0-.547.546v1.552a.546.546 0 1 0 1.092 0v-1.553A.546.546 0 0 0 8 13.777ZM8 3.066a.546.546 0 0 0 .545-.546V.967a.546.546 0 1 0-1.092 0V2.52c0 .301.245.546.546.546ZM3.441 12.208l-1.098 1.097a.546.546 0 1 0 .772.773l1.098-1.098a.546.546 0 1 0-.772-.772ZM12.172 4.794c.14 0 .28-.054.386-.16l1.098-1.098a.546.546 0 0 0-.772-.772l-1.098 1.098a.546.546 0 0 0 .386.932ZM2.644 8.421a.546.546 0 0 0-.546-.546H.546a.546.546 0 0 0 0 1.092h1.552a.546.546 0 0 0 .546-.546ZM15.454 7.875h-1.553a.546.546 0 1 0 0 1.092h1.553a.546.546 0 1 0 0-1.092ZM3.441 4.634a.544.544 0 0 0 .772 0 .546.546 0 0 0 0-.772L3.116 2.764a.546.546 0 1 0-.773.772l1.098 1.098ZM12.56 12.208a.546.546 0 0 0-.773.772l1.097 1.097a.544.544 0 0 0 .772 0 .546.546 0 0 0 0-.772l-1.097-1.097ZM8 4.171a4.254 4.254 0 0 0-4.25 4.25A4.254 4.254 0 0 0 8 12.671a4.254 4.254 0 0 0 4.25-4.25A4.255 4.255 0 0 0 8 4.171Zm0 7.408A3.161 3.161 0 0 1 4.842 8.42 3.161 3.161 0 0 1 8 5.263a3.161 3.161 0 0 1 3.158 3.158A3.161 3.161 0 0 1 8 11.58Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(0 .42)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const IconHome = (props: iconProps) => (
  <Svg
    width={23}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M20.61 9.262a.794.794 0 0 0-.173-.25l-8.265-6.617a.747.747 0 0 0-.508-.195.693.693 0 0 0-.497.206L3.291 9.023a.989.989 0 0 0-.162.25.653.653 0 0 0-.054.281v9.51c0 .194.076.39.216.52.14.14.324.216.519.216H8.78a.727.727 0 0 0 .519-.217.73.73 0 0 0 .216-.52v-5.378h4.718v5.379a.73.73 0 0 0 .216.52c.14.14.324.216.519.216h4.971a.727.727 0 0 0 .519-.217.73.73 0 0 0 .216-.52V9.555a.68.68 0 0 0-.065-.292Zm-5.133 3.167a.727.727 0 0 0-.519-.217H8.781a.727.727 0 0 0-.519.217.73.73 0 0 0-.216.52v5.378H4.534V9.868l7.152-5.913 7.52 5.924v8.448h-3.513v-5.378a.73.73 0 0 0-.216-.52Z"
      fill={props.iconFillColor || '#868686'}
    />
  </Svg>
);
export const IconSearch = (props: iconProps) => (
  <Svg width={23} height={22} fill="none" {...props}>
    <Path
      d="m19.045 19.42-3.64-3.647 3.64 3.647Zm-1.623-8.522a6.898 6.898 0 1 1-13.797 0 6.898 6.898 0 0 1 13.797 0v0Z"
      stroke={props.iconFillColor || '#868686'}
      strokeWidth={1.7}
      strokeLinecap="round"
    />
  </Svg>
);

export const IconMyJob = (props: iconProps) => (
  <Svg
    width={23}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M11.987 11.724a.859.859 0 1 0-1.214.003.858.858 0 0 0 1.214-.003Z"
      fill={props.iconFillColor || '#868686'}
    />
    <Path
      d="M16.05 19.8H6.7a4.134 4.134 0 0 1-2.915-1.207 4.118 4.118 0 0 1-1.21-2.91v-4.941a4.118 4.118 0 0 1 1.21-2.91A4.134 4.134 0 0 1 6.7 6.627h9.35a4.134 4.134 0 0 1 2.915 1.207 4.118 4.118 0 0 1 1.21 2.91v4.94a4.118 4.118 0 0 1-1.21 2.91A4.134 4.134 0 0 1 16.05 19.8ZM6.7 7.999a2.745 2.745 0 0 0-2.75 2.744v4.94c.001.729.291 1.426.807 1.94a2.756 2.756 0 0 0 1.943.805h9.35c.729 0 1.428-.29 1.943-.805a2.745 2.745 0 0 0 .806-1.94v-4.94c0-.728-.29-1.425-.806-1.94A2.756 2.756 0 0 0 16.05 8H6.7Z"
      fill={props.iconFillColor || '#868686'}
    />
    <Path
      d="M13.059 15.169H9.69a3.755 3.755 0 0 1-2.648-1.097 3.74 3.74 0 0 1-1.099-2.642.686.686 0 0 1 .688-.687.689.689 0 0 1 .688.687c0 .627.25 1.23.695 1.673a2.377 2.377 0 0 0 1.677.694h3.368a2.377 2.377 0 0 0 2.372-2.367.686.686 0 0 1 .688-.687.689.689 0 0 1 .688.687 3.74 3.74 0 0 1-1.1 2.643 3.755 3.755 0 0 1-2.65 1.096ZM13.954 5.25a.688.688 0 0 1-.688-.686.995.995 0 0 0-.997-.995h-1.787a1 1 0 0 0-.997.995.686.686 0 0 1-.687.687.688.688 0 0 1-.688-.687 2.368 2.368 0 0 1 .697-1.671 2.377 2.377 0 0 1 1.675-.693h1.787c.63 0 1.232.25 1.677.694.445.444.695 1.046.696 1.674a.686.686 0 0 1-.688.683Z"
      fill={props.iconFillColor || '#868686'}
    />
  </Svg>
);

export const IconTimeCard = (props: iconProps) => (
  <Svg width={23} height={22} fill="none" {...props}>
    <Path
      d="M17.175 3.3V2.2h-1.1v1.1h-4.4V2.2h-1.1v1.1h-4.4V2.2H5.077v1.1a2.754 2.754 0 0 0-2.751 2.75v11a2.754 2.754 0 0 0 2.75 2.75h12.1a2.754 2.754 0 0 0 2.75-2.75v-11a2.754 2.754 0 0 0-2.75-2.75Zm1.65 13.75a1.653 1.653 0 0 1-1.65 1.65h-12.1a1.652 1.652 0 0 1-1.65-1.65v-11a1.652 1.652 0 0 1 1.65-1.65v1.1h1.1V4.402h4.4v1.1h1.101V4.403h4.4v1.1h1.101V4.404a1.652 1.652 0 0 1 1.65 1.65l-.003 10.998Z"
      fill={props.iconFillColor || '#868686'}
      stroke={props.iconFillColor || '#868686'}
      strokeWidth={0.2}
    />
    <Path
      d="M6.175 9.075a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65ZM9.475 9.075a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65ZM12.775 9.075a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65ZM16.075 9.075a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65ZM6.175 12.375a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65ZM9.475 12.375a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65ZM12.775 12.375a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65ZM16.075 12.375a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65ZM6.175 15.675a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65ZM9.475 15.675a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65ZM12.775 15.675a.825.825 0 1 0 0-1.65.825.825 0 0 0 0 1.65Z"
      fill={props.iconFillColor || '#868686'}
      stroke={props.iconFillColor || '#868686'}
      strokeWidth={0.2}
    />
  </Svg>
);
