import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {WELCOME, LOGIN, SIGNUP} from '../routeName';

import {Welcome, Login, SignUp} from '../../screens';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const AuthenticationStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={WELCOME}>
      <Stack.Screen name={WELCOME} component={Welcome} />
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
