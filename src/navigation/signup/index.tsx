import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {
  USER_INFORMATION_NAME,
  VERIFY_ACCOUNT,
  VERIFY_CODE,
  USER_INFORMATION_GENDER,
  LIFE_STYLE,
  UPDATE_NEW_PASSWORD,
  ROOM_UNIT_ADDRESS,
  ROOM_UNIT_GALLERY,
  ROOM_UNIT_KIND_PLACE,
  ROOM_UNIT_PLACE_OFFER,
  ROOM_UNIT_PRICE,
  ROOM_UNIT_TYPE_ROOM,
  PREFERENCES,
  AGENCY_INFORMATION_NAME,
  AGENCY_BASIC_INFORMATION,
  INTRODUCE_HOMEOWNER,
  SELECT_DISTRICTS,
} from '../routeName';

import {
  RoomUnitGallery,
  RoomUnitAddress,
  RoomUnitKindPlace,
  RoomUnitPlaceOffer,
  RoomUnitPrice,
  RoomUnitTypeRoom,
  UserInformationName,
  VerifyAccount,
  VerifyCode,
  UserInformationGender,
  LifeStyle,
  UpdateNewPassword,
  Preferences,
  AgencyInformationName,
  AgencyBasicInformation,
  IntroduceHomeowner,
  Districts,
} from '../../screens';
import {NavigationUtils} from '../NavigationUtils';
import {RoleUser} from '@redux';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const SignupStack = (props: {step: number; role: RoleUser}) => {
  const stepSignup = props?.step || 0;
  console.log({stepSignup});
  const isAgent = props.role?.idType === 'Agent';
  const initialRouteName =
    stepSignup === 2
      ? isAgent
        ? AGENCY_BASIC_INFORMATION
        : USER_INFORMATION_NAME
      : ROOM_UNIT_ADDRESS;

  useEffect(() => {
    if (stepSignup === 2) {
      NavigationUtils.reset(
        isAgent ? AGENCY_BASIC_INFORMATION : USER_INFORMATION_NAME,
      );
    }
  }, [stepSignup]);

  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={initialRouteName}>
      <Stack.Screen name={ROOM_UNIT_ADDRESS} component={RoomUnitAddress} />
      <Stack.Screen name={ROOM_UNIT_GALLERY} component={RoomUnitGallery} />
      <Stack.Screen name={ROOM_UNIT_KIND_PLACE} component={RoomUnitKindPlace} />
      <Stack.Screen
        name={ROOM_UNIT_PLACE_OFFER}
        component={RoomUnitPlaceOffer}
      />
      <Stack.Screen name={ROOM_UNIT_PRICE} component={RoomUnitPrice} />
      <Stack.Screen name={ROOM_UNIT_TYPE_ROOM} component={RoomUnitTypeRoom} />
      <Stack.Screen
        name={USER_INFORMATION_NAME}
        component={UserInformationName}
      />
      <Stack.Screen name={UPDATE_NEW_PASSWORD} component={UpdateNewPassword} />
      <Stack.Screen
        name={USER_INFORMATION_GENDER}
        component={UserInformationGender}
      />
      <Stack.Screen name={LIFE_STYLE} component={LifeStyle} />
      <Stack.Screen name={PREFERENCES} component={Preferences} />
      <Stack.Screen
        name={AGENCY_INFORMATION_NAME}
        component={AgencyInformationName}
      />
      <Stack.Screen
        name={AGENCY_BASIC_INFORMATION}
        component={AgencyBasicInformation}
      />
      <Stack.Screen name={VERIFY_CODE} component={VerifyCode} />
      <Stack.Screen name={VERIFY_ACCOUNT} component={VerifyAccount} />
      <Stack.Screen name={SELECT_DISTRICTS} component={Districts} />
      <Stack.Screen name={INTRODUCE_HOMEOWNER} component={IntroduceHomeowner} />
    </Stack.Navigator>
  );
};

export default SignupStack;
