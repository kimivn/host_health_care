import {colors, fontFamily, SIZE} from '../theme';
import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
// import 'intl/locale-data/jsonp/en';

interface AppTextProps {
  children: any;
  style?: TextStyle | [TextStyle] | undefined;
  onPress?: any;
  numberOfLines?: number;
  isPrice?: boolean;
}

const AppText = React.memo((props: AppTextProps) => {
  const {style, onPress, numberOfLines, isPrice} = props;
  let {children} = props;
  if (isPrice) {
    children = new Intl.NumberFormat('en-US').format(parseInt(children));
  }

  return (
    <>
      <Text
        style={[styles.txtStyle, style]}
        onPress={onPress}
        numberOfLines={numberOfLines}>
        {children}
      </Text>
    </>
  );
});

const styles = StyleSheet.create({
  txtStyle: {
    ...fontFamily.fontWeight400,
    fontSize: SIZE.base_size,
    color: colors.textPrimary,
  },
});

export {AppText};
