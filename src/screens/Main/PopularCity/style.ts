import {colors, SIZE} from '../../../theme';
import {StyleSheet} from 'react-native';
import {fontFamily, scaleSize} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {paddingHorizontal: SIZE.base_space, marginTop: 16},
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
});

export {styles};
