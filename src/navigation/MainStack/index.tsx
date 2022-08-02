import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {TABBAR, POPULAR_CITY, SUGGEST_JOB, JOB_DETAIL} from '../routeName';

import {PopularCity, SuggestJob, JobDetail} from '../../screens';
import {MainBottomBar} from './MainBottomBar';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={TABBAR} component={MainBottomBar} />
      <Stack.Screen name={POPULAR_CITY} component={PopularCity} />
      <Stack.Screen name={SUGGEST_JOB} component={SuggestJob} />
      <Stack.Screen name={JOB_DETAIL} component={JobDetail} />
    </Stack.Navigator>
  );
};

export default MainStack;
