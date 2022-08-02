import {colors, SIZE} from '../../../theme';
import {StyleSheet} from 'react-native';
import {fontFamily, scaleSize} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {paddingHorizontal: SIZE.base_space, marginTop: 16},
  block: {
    borderWidth: 2,
    borderColor: colors.borderPrimary,
    borderRadius: 16,
    paddingLeft: 25,
    paddingVertical: 14,
    paddingRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  blockImage: {
    width: 55,
    height: 62,
    marginRight: 25,
    resizeMode: 'contain',
  },
  blockTitle: {
    ...fontFamily.fontWeight900,
    color: colors.primary,
    marginBottom: 4,
  },
  blockDescription: {
    color: colors.secondPrimary,
    fontSize: scaleSize(12),
    lineHeight: 18,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  title: {
    color: colors.secondPrimary,
    fontSize: scaleSize(18),
    letterSpacing: 0.1,
    lineHeight: 20,
    ...fontFamily.fontWeight500,
    textTransform: 'uppercase',
  },
  iconNext: {
    transform: [{rotate: '180deg'}],
  },
  titleModal: {
    fontSize: scaleSize(16),
    letterSpacing: 0.1,
    lineHeight: 20,
    color: colors.primary,
    marginBottom: 12,
    ...fontFamily.fontWeight800,
  },
  descriptionModal: {
    fontSize: scaleSize(14),
    letterSpacing: 0.1,
    lineHeight: 20,
    color: colors.primary,
    marginBottom: 8,
  },
});

export {styles};
