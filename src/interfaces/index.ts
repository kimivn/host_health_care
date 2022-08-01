import {ReactElement} from 'react';
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export interface screenNavigationProp {
  navigate: any;
}

export interface ButtonProps {
  title?: string;
  label?: string;
  containerStyle?: ViewStyle;
  customStyleButton?: ViewStyle | ViewStyle[];
  customStyleLabel?: TextStyle;
  customStyleTitle?: TextStyle;
  onPress?: any;
  disabled?: boolean;
  image?: any;
  size?: 'base' | 'small';
  typeButton?: 'linear' | 'full' | 'underline' | 'link';
  isActive?: boolean;
  iconLeft?: any;
  iconRight?:
    | 'right'
    | 'email'
    | 'arNextBlack'
    | 'arNext'
    | 'addPhoto'
    | 'addVideo'
    | 'tick'
    | 'other'
    | 'plus';
  imageStyle?: ImageStyle | ImageStyle[];
  customChildView?: ReactElement;
}

export interface IAppInput {
  label?: string;
  placeholder?: string;
  value?: any;
  type?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  style?: ViewStyle | ViewStyle[];
  inputStyle?: TextStyle | TextStyle[];
  customStyleLabel?: TextStyle;
  multiline?: boolean;
  numberOfLines?: number;
  error?: string;
  showEye?: boolean;
  onValueChange: (value: any, name?: string) => void;
  keyboardType?: any;
  editable?: boolean;
  iconLeft?: 'map' | 'key' | 'email' | 'dolar' | 'floor_size' | 'other';
  iconRight?: 'clear' | 'other';
  name?: string;
  autoFocus?: boolean;
  typeInput?: 'default' | 'price' | 'phone' | 'password' | 'linear';
  delimiter?: string;
  onPressRightIcon?: () => void;
  maxLength?: number;
  callBackOnFocus?: (focus: boolean) => void;
  onEndEditing?: (name?: string) => void;
}

export interface HeaderProps {
  customTitleStyle?: any;
  title?: string;
  customContainer?: ViewStyle;
  back?: any;
  btnCountine?: boolean;
  onPressRight?: () => void;
  btnRight?: any;
  iconRight?: 'skip' | 'hide';
  onPressBack?: () => void;
  iconFillColor?: string;
}

export interface mockProps {
  id?: number;
  value?: string;
  icon?: any;
  iconSelected?: any;
}

export interface loginState {
  email: string;
  password: string;
}

export interface signUpState {
  email: string;
  firstName: string;
  lastName: string;
  confirmPass: string;
  password: string;
}
