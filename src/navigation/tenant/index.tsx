import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {
  VERIFY_ACCOUNT,
  VERIFY_CODE,
  ACCOUNT_SETTING,
  BASIC_INFORMATION,
  CHANGE_PASSWORD,
  PROFILE_LIFE_STYLE,
  PROFILE,
  TABBAR,
  SEARCHING_FILTER,
  ROOM_DETAIL_LOCATION,
  PASSED_MATCHES,
  MATCHES_DETAIL_TENANT,
  CONVERSATION_DETAIL,
  SELECT_DISTRICTS,
  IMAGE_VIEWER,
} from '../routeName';

import {
  VerifyAccount,
  VerifyCode,
  AccountSetting,
  BasicInfomation,
  ChangePassword,
  ProfileLifeStyle,
  Profile,
  SearchingFilter,
  RoomDetailLocation,
  PassedMatches,
  MatchesDetailTenant,
  ConversationDetail,
  Districts,
} from '../../screens';
import { TenantBottomTabs } from './TenantBottomTabs';
import { ImageViewerScreen } from '@component';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const TenantStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={TABBAR} component={TenantBottomTabs} />
      <Stack.Screen name={PROFILE} component={Profile} />
      <Stack.Screen name={VERIFY_ACCOUNT} component={VerifyAccount} />
      <Stack.Screen name={VERIFY_CODE} component={VerifyCode} />
      <Stack.Screen name={BASIC_INFORMATION} component={BasicInfomation} />
      <Stack.Screen name={CHANGE_PASSWORD} component={ChangePassword} />
      <Stack.Screen name={ACCOUNT_SETTING} component={AccountSetting} />
      <Stack.Screen name={PROFILE_LIFE_STYLE} component={ProfileLifeStyle} />
      <Stack.Screen name={SEARCHING_FILTER} component={SearchingFilter} />
      <Stack.Screen
        name={ROOM_DETAIL_LOCATION}
        component={RoomDetailLocation}
      />
      <Stack.Screen name={PASSED_MATCHES} component={PassedMatches} />
      <Stack.Screen
        name={MATCHES_DETAIL_TENANT}
        component={MatchesDetailTenant}
      />
      <Stack.Screen name={CONVERSATION_DETAIL} component={ConversationDetail} />
      <Stack.Screen name={SELECT_DISTRICTS} component={Districts} />
      <Stack.Screen name={IMAGE_VIEWER} component={ImageViewerScreen} />
    </Stack.Navigator>
  );
};

export default TenantStack;
