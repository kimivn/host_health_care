import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {SIGNUP} from '../../../navigation/routeName';
import {logo} from '../../../assets';
import {AppInput, Header, AppButton, AppText} from '../../../component';
import {SIZE} from '../../../theme';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useStores} from '../../../stores';

interface screenNavigationProp {
  navigate: any;
}

const Login = () => {
  const navigation = useNavigation<screenNavigationProp>();
  const {userStore} = useStores();

  const formInitialValues = {
    email: '',
    password: '',
  };

  const validationEmail = yup.object().shape({
    email: yup
      .string()
      .required('This field is required')
      .email('Email is not valid'),
    password: yup
      .string()
      .required('This field is required')
      .min(8, 'At least 8 characters (text & number)')
      .max(32, 'Password may not be greater than 32 characters'),
  });

  const moveToSignUp = () => {
    navigation.navigate(SIGNUP);
  };

  const handleSubmit = (values: any) => {
    userStore.onLogin(values);
  };

  return (
    <View style={styles.container}>
      <Header title="SIGN IN" back />
      <View style={{paddingHorizontal: SIZE.base_space}}>
        <Image style={styles.logo} source={logo} />
        <Formik
          enableReinitialize
          initialValues={formInitialValues}
          validationSchema={validationEmail}
          validateOnChange={false}
          onSubmit={handleSubmit}>
          {props => (
            <>
              <AppInput
                name="email"
                label="Email"
                value={props.values.email}
                onValueChange={value => {
                  props.setFieldValue('email', value);
                }}
                error={props.errors.email}
              />
              <AppInput
                name="password"
                label="Password"
                showEye
                value={props.values.password}
                onValueChange={value => {
                  props.setFieldValue('password', value);
                }}
                error={props.errors.password}
              />

              <AppButton
                title="SIGN IN"
                containerStyle={styles.btnSignIn}
                onPress={props.handleSubmit}
              />
            </>
          )}
        </Formik>

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
};

export {Login};
