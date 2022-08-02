import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '.';
import {colors, fontFamily, scaleSize, scaleWidth} from '../theme';

interface PopularProps {
  item: {
    city: string;
    province: string;
    matches_count: number;
    rate_per_week: string;
    image: any;
  };
  onPress: () => void;
}

const PopularItem = (props: PopularProps) => {
  console.log({props});
  const {image, city, province, matches_count, rate_per_week} = props.item;
  return (
    <TouchableOpacity style={styles.block} onPress={props.onPress}>
      <View>
        <Image source={image} style={styles.suggestImage} />
      </View>

      <View style={styles.blockBody}>
        <View style={styles.flexRow}>
          <AppText style={styles.city}>{city}</AppText>
          <AppText style={styles.province}>{province}</AppText>
        </View>

        <View style={styles.spaceBetween}>
          <AppText style={{fontSize: 12}}>
            <AppText style={styles.matches_count}>{matches_count}</AppText>
            {' Matches'}
          </AppText>
          <AppText style={{}}>
            <AppText style={styles.rate_per_week}>{rate_per_week}</AppText>
            {' /wk'}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 8,
    flexDirection: 'row',
    height: scaleWidth(80),
  },
  suggestImage: {
    width: 96,
    height: '100%',
  },
  blockBody: {
    borderWidth: 2,
    borderColor: '#E6E6E6',
    borderLeftWidth: 0,
    paddingHorizontal: 14,
    paddingTop: 10,
    flex: 1,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  city: {
    ...fontFamily.fontWeight900,
    color: colors.secondPrimary,
  },
  province: {
    color: colors.primary,
    fontSize: scaleSize(12),
    letterSpacing: 0.1,
    opacity: 0.8,
    lineHeight: 18,
    ...fontFamily.fontWeight500,
    marginLeft: 8,

    paddingTop: 4,
  },
  matches_count: {
    color: colors.primary,
    fontSize: scaleSize(14),
    letterSpacing: 0.1,
    lineHeight: 18,
    ...fontFamily.fontWeight900,
  },
  rate_per_week: {
    color: 'black',
    fontSize: scaleSize(14),
    letterSpacing: 0.1,
    lineHeight: 18,
    ...fontFamily.fontWeight900,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export {PopularItem};
