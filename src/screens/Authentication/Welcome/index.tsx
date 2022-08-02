import {AppButton, AppText} from '../../../component';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Image} from 'react-native';
import {styles} from './style';
import {LOGIN, SIGNUP} from '../../../navigation/routeName';
import {logo} from '../../../assets';

interface screenNavigationProp {
  navigate: any;
}

const Welcome = React.memo(() => {
  const navigation = useNavigation<screenNavigationProp>();

  const moveToSignIn = () => {
    navigation.navigate(LOGIN);
  };

  const moveToSignup = () => {
    navigation.navigate(SIGNUP);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <AppText style={styles.h2}>{'Welcome to Host Healthcare!'}</AppText>
      <AppText style={styles.h3}>
        {'Sign up to find your perfect job today.'}
      </AppText>
      <AppButton title="Sign up" onPress={moveToSignup} />

      <AppButton title="Sign in" onPress={moveToSignIn} typeButton="linear" />
    </View>
  );
});

export {Welcome};
