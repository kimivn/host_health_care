import {colors, fontFamily, scaleHeight} from '../../../theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingHorizontal: 16,
    paddingTop: scaleHeight(160),
  },
  logo: {
    width: 200,
    height: 55,
    marginBottom: 64,
    alignSelf: 'center',
  },
  h2: {
    color: colors.primary,
    marginBottom: 8,
    ...fontFamily.fontWeight900,
    textAlign: 'center',
  },
  h3: {
    color: colors.secondPrimary,
    marginBottom: 24,
    textAlign: 'center',
  },
});

export {styles};
