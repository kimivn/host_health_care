import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {
  IconCalendar,
  IconJob,
  IconLike,
  IconLocation,
  IconShare,
  IconSun,
} from '../assets';
import {AppButton, AppText} from '../component';
import {colors, fontFamily, scaleSize, width} from '../theme';

interface SuggestProps {
  item: {
    name: string;
    company: string;
    location: string;
    specialized: string;
    duration: string;
    shift: string;
    point: number;
    estimated: string;
    image: any;
  };
  onPress: () => void;
  onSubmit: () => void;
}

const SuggestItem = (props: SuggestProps) => {
  const {
    image,
    company,
    name,
    specialized,
    location,
    duration,
    shift,
    estimated,
    point,
  } = props.item;
  return (
    <>
      <Pressable style={styles.block} onPress={props.onPress}>
        <View>
          <View style={styles.locationView}>
            <IconLocation />
            <AppText style={styles.locationName}>{location}</AppText>
          </View>
          <Image source={image} style={styles.suggestImage} />
          <View style={styles.suggestIconTop}>
            <IconLike />
            <IconShare />
          </View>
        </View>

        <View style={styles.blockBody}>
          <View style={styles.spaceBetween}>
            <View>
              <AppText style={styles.name}>{name}</AppText>
              <AppText style={styles.company}>{company}</AppText>
              <View style={styles.flexRow}>
                <IconJob />
                <AppText style={styles.specialized}>{specialized}</AppText>
              </View>
              <View style={styles.flexRow}>
                <IconCalendar />
                <AppText style={styles.specialized}>{duration}</AppText>
              </View>
              <View style={styles.flexRow}>
                <IconSun />
                <AppText style={styles.specialized}>{shift}</AppText>
              </View>
            </View>
            <View>
              <View style={styles.pointView}>
                <AppText style={styles.point}>{point * 100}</AppText>
              </View>

              <AppText style={styles.match}>{'% match'}</AppText>
            </View>
          </View>
          <AppText style={styles.estimate}>
            {'Estimated '}
            <AppText style={styles.estimateValue}>{estimated}</AppText>
            {' /wk'}
          </AppText>
          <AppButton
            title="PLEASE SUBMIT"
            customStyleButton={{borderRadius: 30}}
            customStyleTitle={{letterSpacing: 0.5}}
            onPress={props.onSubmit}
          />
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  match: {
    fontSize: scaleSize(12),
    letterSpacing: 0.1,
    lineHeight: 20,
    color: colors.secondPrimary,
  },
  pointView: {
    width: 32,
    height: 32,
    backgroundColor: colors.secondPrimary,
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  point: {
    color: 'white',
    fontSize: scaleSize(20),
    ...fontFamily.fontWeight900,
  },
  estimate: {
    color: 'black',
    fontSize: scaleSize(12),
    letterSpacing: 0.2,
    lineHeight: 18,
    textAlign: 'right',
  },
  estimateValue: {
    color: 'black',
    fontSize: scaleSize(16),
    ...fontFamily.fontWeight800,
    lineHeight: 20,
  },
  name: {
    color: colors.secondPrimary,
    ...fontFamily.fontWeight800,
    marginBottom: 2,
  },
  company: {
    color: colors.textPrimary,
    fontSize: scaleSize(12),
    letterSpacing: 0.2,
    lineHeight: 16,
    marginBottom: 4,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  specialized: {
    color: colors.primary,
    fontSize: scaleSize(12),
    letterSpacing: 0.1,
    lineHeight: 18,
    marginLeft: 10,
  },
  duration: {
    color: colors.primary,
    fontSize: scaleSize(12),
    letterSpacing: 0.1,
    lineHeight: 18,
    marginLeft: 10,
    ...fontFamily.fontWeight800,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  block: {
    borderRadius: 16,
    paddingBottom: 16,
    width: width - 33,
    overflow: 'hidden',
    marginRight: 16,
  },
  suggestImage: {
    width: '100%',
    height: 99,
  },
  blockBody: {
    borderWidth: 2,
    borderColor: '#E6E6E6',
    borderTopWidth: 0,
    padding: 16,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  suggestIconTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: 71,
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: colors.bgPrimary,
    height: 37,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 16,
    bottom: 8,
    zIndex: 1,
  },
  locationName: {
    fontSize: 12,
    ...fontFamily.fontWeight800,
    lineHeight: 18,
    color: 'white',
    marginLeft: 8,
  },
});

export {SuggestItem};
