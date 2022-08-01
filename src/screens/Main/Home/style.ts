import {colors, SIZE} from '../../../util';
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
  forgetPass: {
    color: colors.secondPrimary,
    textAlign: 'center',
    marginBottom: 40,
    marginTop: SIZE.padding,
  },
  viewSignUp: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSignUp: {
    color: colors.secondPrimary,
  },
});

export {styles};
