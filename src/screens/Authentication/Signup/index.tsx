import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './style';
import {SIGNUP} from '../../../navigation/routeName';
import {logo} from '../../../assets';
import {AppInput, Header, AppButton, AppText} from '../../../component';
import {signUpState} from '../../../interfaces';
import {SIZE} from '../../../util';

interface screenNavigationProp {
  navigate: any;
}

const SignUp = React.memo(() => {
  const [user, setUser] = useState<signUpState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPass: '',
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
      <Header title="SIGN IN" back />
      <ScrollView style={{paddingHorizontal: SIZE.base_space}}>
        <Image style={styles.logo} source={logo} />
        <AppInput
          value={user.firstName}
          onValueChange={onChangeValue}
          name="firstName"
          label="First Name"
        />
        <AppInput
          value={user.lastName}
          onValueChange={onChangeValue}
          name="lastName"
          label="Last Name"
        />
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
        <AppInput
          value={user.confirmPass}
          onValueChange={onChangeValue}
          name="confirmPass"
          label="Password Confirm"
          showEye
        />

        <AppButton title="SIGN UP" containerStyle={styles.btnSignIn} />

        <View style={styles.viewSignIn}>
          <AppText>{'Have an account?'}</AppText>
          <TouchableOpacity onPress={moveToSignUp}>
            <AppText style={styles.textSignIn}>{' Sign In here'}</AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
});

export {SignUp};
