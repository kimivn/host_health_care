import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {SIGNUP} from '../../../navigation/routeName';
import {logo} from '../../../assets';
import {AppInput, Header, AppButton, AppText} from '../../../component';
import {loginState} from '../../../interfaces';
import {SIZE} from '../../../util';

interface screenNavigationProp {
  navigate: any;
}

const Home = React.memo(() => {
  const [user, setUser] = useState<loginState>({
    email: '',
    password: '',
  });
  const navigation = useNavigation<screenNavigationProp>();

  const moveToSignUp = () => {
    navigation.navigate(SIGNUP);
  };

  const onChangeValue = (value: any, name?: string) => {
    if (name) {
      const nUser = {...user};
      nUser[name] = value;
      setUser(nUser);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="HOME" />
      <View style={{paddingHorizontal: SIZE.base_space}}>
        <Image style={styles.logo} source={logo} />
        <AppInput
          value={user.email}
          onValueChange={onChangeValue}
          name="email"
          label="Email"
        />
        <AppInput
          value={user.password}
          onValueChange={onChangeValue}
          name="password"
          label="Password"
          showEye
        />

        <AppButton title="SIGN IN" containerStyle={styles.btnSignIn} />
        <TouchableOpacity>
          <AppText style={styles.forgetPass}>{'Forgot password?'}</AppText>
        </TouchableOpacity>
        <View style={styles.viewSignUp}>
          <AppText>{"Don't have an account?"}</AppText>
          <TouchableOpacity onPress={moveToSignUp}>
            <AppText style={styles.textSignUp}>{' Sign Up here'}</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
});

export {Home};
