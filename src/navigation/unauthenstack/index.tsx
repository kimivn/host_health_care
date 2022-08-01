import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {WELCOME, LOGIN, SIGNUP, HOME} from '../routeName';

import {Welcome, Login, SignUp, Home} from '../../screens';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const UnAuthenStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions} initialRouteName={HOME}>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={WELCOME} component={Welcome} />
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={SIGNUP} component={SignUp} />
    </Stack.Navigator>
  );
};

export default UnAuthenStack;
