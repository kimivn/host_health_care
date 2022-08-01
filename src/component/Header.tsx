import React from 'react';
import {StyleSheet, View, TouchableOpacity, Pressable} from 'react-native';
import {AppText} from '../component';
import {getStatusBarHeight, ifIphoneX} from 'react-native-iphone-x-helper';
import {colors, DEVICE, fontFamily, scaleHeight, SIZE, STYLE} from '../util';
import {IconBack, IconSkip} from '../assets';
import {useNavigation} from '@react-navigation/native';
import {HeaderProps} from '../interfaces';

interface screenNavigationProp {
  goBack: any;
}

const Header = React.memo((props: HeaderProps) => {
  const {
    customTitleStyle,
    title,
    customContainer,
    back,
    onPressBack,
    iconFillColor,
    iconRight,
    onPressRight,
  } = props;
  const navigation = useNavigation<screenNavigationProp>();
  const goBack = () => {
    if (onPressBack) {
      onPressBack();
    } else {
      navigation.goBack();
    }
  };

  const renderIconRight = () => {
    switch (iconRight) {
      case 'skip':
        return <IconSkip />;
    }

    return null;
  };

  return (
    <View style={[styles.container, customContainer]}>
      <View style={styles.viewRow}>
        {back && (
          <TouchableOpacity
            style={styles.buttonLeft}
            onPress={goBack}
            hitSlop={STYLE.hitSlop}>
            <IconBack iconFillColor={iconFillColor} />
          </TouchableOpacity>
        )}
        <AppText style={[styles.txtTitle, customTitleStyle]}>{title}</AppText>
        {iconRight !== 'hide' && (
          <Pressable
            style={styles.buttonRight}
            onPress={onPressRight}
            hitSlop={STYLE.hitSlop}>
            {renderIconRight()}
          </Pressable>
        )}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    ...ifIphoneX(
      {
        paddingTop: scaleHeight(55),
      },
      {
        paddingTop: getStatusBarHeight() + scaleHeight(25),
      },
    ),
    paddingBottom: scaleHeight(10),
    borderBottomColor: colors.borderInput,
    borderBottomWidth: 1,
    // height: 42,
  },
  txtTitle: {
    fontSize: SIZE.base_size,
    color: colors.secondPrimary,
    flex: 1,
    paddingHorizontal: SIZE.base_space,
    textAlign: 'center',
    ...fontFamily.fontWeight900,
  },
  viewRow: {
    flexDirection: 'row',
    width: DEVICE.width,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZE.big_space,
  },
  buttonLeft: {
    left: SIZE.base_space,
    position: 'absolute',
  },
  buttonRight: {
    right: SIZE.padding,
    position: 'absolute',
  },
});

export {Header};
