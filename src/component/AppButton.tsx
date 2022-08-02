import React, {useCallback} from 'react';
import {StyleSheet, View, Image, Pressable, TouchableOpacity} from 'react-native';
import {AppText} from './AppText';
import {colors, fontFamily, scaleSize, SIZE} from '../theme';
import {debounce} from 'lodash';
import {ButtonProps} from '../interfaces';
import {CaretRight} from '../assets';

const AppButton = React.memo((props: ButtonProps) => {
  const {
    title,
    label,
    customStyleButton,
    customStyleTitle,
    customStyleLabel,
    onPress,
    disabled,
    iconRight,
    size,
    typeButton,
    isActive,
    image,
    imageStyle,
    containerStyle,
    iconLeft,
    customChildView,
  } = props;

  const onPressButton = useCallback(
    debounce(() => {
      if (onPress) {
        onPress();
      }
    }, 150),
    [onPress],
  );

  const bgLinear = {
    backgroundColor: 'transparent',
  };

  const titleLinear = {
    fontFamily: isActive
      ? fontFamily.fontWeight900.fontFamily
      : fontFamily.fontWeight500.fontFamily,
  };

  const buttonStyle = [
    styles.container,
    typeButton === 'linear' ? bgLinear : {},
    {minHeight: size === 'small' ? SIZE.btn_height_small : SIZE.btn_height},
    typeButton === 'link' ? styles.bgLink : {},
    typeButton === 'underline' ? styles.bgUnderline : {},
    customStyleButton,
  ];

  const titleStyle = [
    styles.txtButton,
    typeButton === 'linear' && titleLinear,
    typeButton === 'link' ? styles.titleLink : {},
    typeButton === 'underline' ? styles.titleUnderline : {},
    size === 'small' && {...fontFamily.fontWeight900},
    customStyleTitle,
  ];

  const renderIconRight = () => {
    switch (iconRight) {
      case 'right':
        return <CaretRight />;
    }

    return null;
  };

  return (
    <Pressable style={containerStyle}>
      {label && (
        <AppText style={[styles.label, customStyleLabel]}>{label}</AppText>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        style={buttonStyle}
        disabled={disabled}
        onPress={onPressButton}>
        {iconLeft && <>{iconLeft}</>}
        {image && <Image source={image} style={imageStyle} />}
        {!!title && <AppText style={titleStyle}>{title}</AppText>}
        {iconRight && <View style={styles.iconRight}>{renderIconRight()}</View>}
        {customChildView}
      </TouchableOpacity>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZE.base_space,
    backgroundColor: colors.bgPrimary,
    borderWidth: 2,
    borderColor: colors.borderPrimary,
  },
  label: {
    color: colors.secondPrimary,
    fontSize: scaleSize(14.5),
    ...fontFamily.fontWeight500,
    paddingTop: SIZE.padding,
  },
  txtButton: {
    ...fontFamily.fontWeight500,
    color: colors.secondPrimary,
    fontSize: SIZE.base_size,
    lineHeight: scaleSize(19),
    textTransform: 'uppercase',
  },
  iconLeft: {
    marginRight: SIZE.base_space,
  },
  iconRight: {
    marginLeft: SIZE.base_space / 2,
    marginRight: -SIZE.base_space / 2,
  },
  bgLink: {
    backgroundColor: 'transparent',
    minHeight: 'auto',
    alignItems: 'flex-end',
    alignSelf: 'center',
    borderRadius: 0,
    marginTop: SIZE.medium_space - 4,
  },
  titleLink: {
    color: colors.textSecondPrimary,
    ...fontFamily.fontWeight500,
    lineHeight: SIZE.base_size * 1.6,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.textSecondPrimary,
  },
  bgUnderline: {
    backgroundColor: 'transparent',
    minHeight: 'auto',
    justifyContent: 'flex-start',
    borderRadius: 0,
    paddingTop: SIZE.base_space / 2,
    marginTop: 0,
    borderBottomColor: colors.borderProfileList,
    borderBottomWidth: 1,
  },
  titleUnderline: {
    textAlign: 'left',
    color: colors.textPrimary,
    fontSize: SIZE.base_size + 1,
    ...fontFamily.fontWeight500,
    paddingBottom: SIZE.padding,
  },
});

export {AppButton};
