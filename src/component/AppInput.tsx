import {AppText} from '../component';
import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {colors, fontFamily, DEVICE, scaleWidth, SIZE, scaleSize} from '../util';
import {EyeIconClose, EyeIconOpen, IconClear} from '../assets';
import {IAppInput} from '../interfaces';

export const AppInput = (props: IAppInput) => {
  const {
    label,
    error,
    value,
    placeholder,
    inputStyle,
    multiline = false,
    numberOfLines = 1,
    style,
    showEye,
    onValueChange,
    keyboardType,
    editable,
    iconLeft,
    iconRight,
    name,
    containerStyle,
    autoFocus,
    typeInput,
    customStyleLabel,
    onPressRightIcon,
    maxLength,
    callBackOnFocus,
    onEndEditing,
  } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidePasssWord, setHidePassWord] = React.useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    if (callBackOnFocus) callBackOnFocus(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
    if (callBackOnFocus) callBackOnFocus(false);
  };
  const onShowPassWord = () => {
    setHidePassWord(!hidePasssWord);
  };

  const renderIconLeft = () => {
    // switch (iconLeft) {
    //   case 'map':
    //     return <IconPickLocation />;
    //   case 'email':
    //     return <IconEmail />;
    //   case 'key':
    //     return <Key />;
    //   case 'dolar':
    //     return <IconDola />;
    //   case 'floor_size':
    //     return <IconFloorSize />;
    // }

    return null;
  };

  const renderIconRight = () => {
    switch (iconRight) {
      case 'clear':
        return <IconClear />;
    }

    return null;
  };

  const _onClear = () => {
    if (name) {
      onValueChange('', name);
    }
  };

  const onChangeText = (text: any) => {
    const nText = text || '';
    if (onValueChange) onValueChange(nText, name);
  };

  const styles =
    typeInput !== 'linear' || isFocused
      ? stylesBase
      : {...stylesBase, ...stylesLinear};

  const viewStyle: any = [
    styles.inputWrap,
    {borderColor: isFocused ? colors.secondPrimary : colors.bgInput},
    style,
  ];

  const ipStyle: any = [
    styles.input,
    inputStyle,
    DEVICE.isIos &&
      multiline && {
        paddingTop: scaleWidth(16),
      },
  ];

  const onEndEditingInput = (e: any) => {
    if (onEndEditing) onEndEditing(name);
  };

  return (
    <View style={containerStyle}>
      {label && (
        <AppText style={[styles.label, customStyleLabel]}>{label}</AppText>
      )}
      <View style={viewStyle}>
        {iconLeft && <View style={styles.iconLeft}>{renderIconLeft()}</View>}
        <TextInput
          style={ipStyle}
          editable={editable}
          placeholder={placeholder}
          placeholderTextColor={colors.textThirdPrimary}
          value={value}
          multiline={multiline}
          onFocus={handleFocus}
          onBlur={handleBlur}
          numberOfLines={numberOfLines}
          onChangeText={onChangeText}
          secureTextEntry={hidePasssWord}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          maxLength={maxLength}
          onEndEditing={onEndEditingInput}
          returnKeyType={'done'}
          blurOnSubmit={!multiline}
        />

        {showEye ? (
          <TouchableOpacity onPress={onShowPassWord} style={styles.iconRight}>
            {hidePasssWord ? <EyeIconClose /> : <EyeIconOpen />}
          </TouchableOpacity>
        ) : iconRight ? (
          <Pressable onPress={onPressRightIcon} style={styles.iconRight}>
            {renderIconRight()}
          </Pressable>
        ) : value?.length > 0 ? (
          <Pressable onPress={_onClear} style={styles.iconRight}>
            <IconClear />
          </Pressable>
        ) : null}
      </View>
      {!!error && <AppText style={styles.error}>{error}</AppText>}
    </View>
  );
};

const stylesBase = StyleSheet.create({
  inputWrap: {
    minHeight: SIZE.input_height,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderInput,
  },
  label: {
    color: colors.primary,
    ...fontFamily.fontWeight500,
    marginTop: SIZE.base_space,
    fontSize: scaleSize(15),
  },
  iconLeft: {
    marginRight: SIZE.padding / 2,
  },
  iconRight: {
    marginLeft: SIZE.padding / 2,
  },
  input: {
    flex: 1,
    height: '100%',
    color: colors.textPrimary,
    fontSize: SIZE.base_size,
    ...fontFamily.fontWeight500,
  },
  error: {
    marginTop: 5,
    color: colors.red,
    fontSize: scaleSize(15),
    lineHeight: scaleSize(17),
  },
});

const stylesLinear = StyleSheet.create({
  inputWrap: {
    minHeight: 'auto',
    backgroundColor: colors.white,
    alignItems: 'flex-start',
    borderBottomColor: colors.borderProfileList,
    borderBottomWidth: 1,
    borderRadius: 0,
  },
  label: {
    color: colors.secondPrimary,
    ...fontFamily.fontWeight500,
    marginTop: SIZE.base_space,
    marginBottom: 0,
    fontSize: scaleSize(14.5),
  },
  input: {
    flex: 1,
    height: '100%',
    color: colors.textPrimary,
    fontSize: SIZE.base_size + 1,
    ...fontFamily.fontWeight500,
    paddingBottom: SIZE.padding,
    paddingTop: SIZE.base_space / 2,
    width: '100%',
  },
});
