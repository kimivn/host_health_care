import {colors, SIZE} from '../../../theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingHorizontal: 16,
  },
  logo: {
    width: 200,
    height: 55,
    marginTop: 65,
    alignSelf: 'center',
    marginBottom: 36,
  },
  btnSignIn: {
    marginTop: SIZE.base_space,
  },
  viewSignIn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  textSignIn: {
    color: colors.secondPrimary,
  },
});

export {styles};
