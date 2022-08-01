import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import {
  VERIFY_ACCOUNT,
  VERIFY_CODE,
  ROOM_UNIT_ADDRESS,
  ROOM_UNIT_GALLERY,
  ROOM_UNIT_KIND_PLACE,
  ROOM_UNIT_PLACE_OFFER,
  ROOM_UNIT_PRICE,
  ROOM_UNIT_TYPE_ROOM,
  YOUR_LISTING,
  ACCOUNT_SETTING,
  BASIC_INFORMATION,
  CHANGE_PASSWORD,
  PROFILE_LIFE_STYLE,
  PROFILE,
  ROOM_DETAIL,
  ROOM_DETAIL_LOCATION,
  ADD_SUCCESS,
  TABBAR,
  MATCHES_FILTER,
  PASSED_MATCHES,
  MATCHES_DETAIL_HOME_OWNER,
  CONVERSATION_DETAIL,
  IMAGE_VIEWER,
} from '../routeName';

import {
  RoomUnitGallery,
  RoomUnitAddress,
  RoomUnitPlaceOffer,
  RoomUnitPrice,
  RoomUnitTypeRoom,
  VerifyAccount,
  VerifyCode,
  YourListing,
  AccountSetting,
  BasicInfomation,
  ChangePassword,
  ProfileLifeStyle,
  Profile,
  RoomDetail,
  RoomDetailLocation,
  RoomUnitKindPlace,
  AddSuccess,
  HomeownerFilter,
  PassedMatches,
  MatchesDetailHomeOwner,
  ConversationDetail,
} from '../../screens';
import { HomeBottomTabs } from './HomeBottomTabs';
import { ImageViewerScreen } from '@component';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const HomeownerStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={TABBAR} component={HomeBottomTabs} />
      <Stack.Screen name={PROFILE} component={Profile} />
      <Stack.Screen name={VERIFY_ACCOUNT} component={VerifyAccount} />
      <Stack.Screen name={VERIFY_CODE} component={VerifyCode} />
      <Stack.Screen name={BASIC_INFORMATION} component={BasicInfomation} />
      <Stack.Screen name={CHANGE_PASSWORD} component={ChangePassword} />
      <Stack.Screen name={ACCOUNT_SETTING} component={AccountSetting} />
      <Stack.Screen name={PROFILE_LIFE_STYLE} component={ProfileLifeStyle} />
      <Stack.Screen name={YOUR_LISTING} component={YourListing} />
      <Stack.Screen name={ROOM_DETAIL} component={RoomDetail} />
      <Stack.Screen
        name={ROOM_DETAIL_LOCATION}
        component={RoomDetailLocation}
      />
      {/* matches  */}
      <Stack.Screen
        name={MATCHES_DETAIL_HOME_OWNER}
        component={MatchesDetailHomeOwner}
      />
      {/* Room unit */}
      <Stack.Screen name={ROOM_UNIT_ADDRESS} component={RoomUnitAddress} />
      <Stack.Screen name={ROOM_UNIT_GALLERY} component={RoomUnitGallery} />
      <Stack.Screen name={ROOM_UNIT_KIND_PLACE} component={RoomUnitKindPlace} />
      <Stack.Screen
        name={ROOM_UNIT_PLACE_OFFER}
        component={RoomUnitPlaceOffer}
      />
      <Stack.Screen name={ROOM_UNIT_TYPE_ROOM} component={RoomUnitTypeRoom} />
      <Stack.Screen name={ROOM_UNIT_PRICE} component={RoomUnitPrice} />
      <Stack.Screen name={ADD_SUCCESS} component={AddSuccess} />
      <Stack.Screen name={MATCHES_FILTER} component={HomeownerFilter} />
      <Stack.Screen name={PASSED_MATCHES} component={PassedMatches} />
      <Stack.Screen
        name={CONVERSATION_DETAIL}
        component={ConversationDetail}
      />
      <Stack.Screen name={IMAGE_VIEWER} component={ImageViewerScreen} />
    </Stack.Navigator>
  );
};

export default HomeownerStack;
