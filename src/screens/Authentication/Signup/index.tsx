import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './style';
import {SIGNUP} from '../../../navigation/routeName';
import {logo} from '../../../assets';
import {AppInput, Header, AppButton, AppText} from '../../../component';
import {SIZE} from '../../../theme';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useStores} from '../../../stores';
import {NavigationUtils} from '../../../navigation';

interface screenNavigationProp {
  navigate: any;
}

const SignUp = () => {
  const navigation = NavigationUtils;
  const {userStore} = useStores();

  const formInitialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPass: '',
  };

  const validationEmail = yup.object().shape({
    email: yup
      .string()
      .required('This field is required')
      .email('Email is not valid'),
    firstName: yup.string().required('This field is required'),
    lastName: yup.string().required('This field is required'),
    password: yup
      .string()
      .required('This field is required')
      .min(8, 'At least 8 characters (text & number)')
      .max(32, 'Password may not be greater than 32 characters'),
    confirmPass: yup
      .string()
      .required('This field is required')
      .oneOf(
        [yup.ref('password'), null],
        'Confirm Password does not match the password',
      ),
  });

  const moveToSignUp = () => {
    navigation.navigate(SIGNUP);
  };

  const handleSubmit = (values: any) => {
    const nUser = {...values};
    delete nUser.confirmPass;
    userStore.onSignUp(nUser);
  };

  return (
    <View style={styles.container}>
      <Header title="SIGN IN" back />
      <ScrollView style={{paddingHorizontal: SIZE.base_space}}>
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
                name="firstName"
                label="First Name"
                value={props.values.firstName}
                onValueChange={value => {
                  props.setFieldValue('firstName', value);
                }}
                error={props.errors.firstName}
              />
              <AppInput
                name="lastName"
                label="Last Name"
                value={props.values.lastName}
                onValueChange={value => {
                  props.setFieldValue('lastName', value);
                }}
                error={props.errors.lastName}
              />
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
              <AppInput
                name="confirmPass"
                label="Password Confirm"
                showEye
                value={props.values.confirmPass}
                onValueChange={value => {
                  props.setFieldValue('confirmPass', value);
                }}
                error={props.errors.confirmPass}
              />

              <AppButton
                title="SIGN UP"
                containerStyle={styles.btnSignIn}
                onPress={props.handleSubmit}
              />
            </>
          )}
        </Formik>

        <View style={styles.viewSignIn}>
          <AppText>{'Have an account?'}</AppText>
          <TouchableOpacity onPress={moveToSignUp}>
            <AppText style={styles.textSignIn}>{' Sign In here'}</AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export {SignUp};
