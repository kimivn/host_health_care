import {colors, fontFamily, scaleSize, SIZE} from '../../../theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {paddingHorizontal: SIZE.base_space, marginTop: 16},
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
