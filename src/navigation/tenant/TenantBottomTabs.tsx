import { AppText } from '@component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Chat, Liked, LikedMatches, MatchesTenant, Profile } from '@screens';
import * as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors, fontFamily, scaleHeight, scaleSize, scaleWidth } from '@util';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import {
  IconChat,
  IconLiked,
  IconLikedNoti,
  IconMatches,
  IconProfile,
} from '@assets';
import { CHAT_TENANT, LIKED_TENANT, MATCHES_TENANT, PROFILE } from '@routeName';
import { useDispatch, useSelector } from 'react-redux';
import reactotron from 'reactotron-react-native';
import { getConversationList, getLikeRoomTenant } from '@redux';
import { StateRedux } from '@interfaces';

type routeType = {
  name: string;
  key: string;
};

interface typeProps {
  state: any;
  descriptors: any;
  navigation: any;
}
const CustomTab = (props: typeProps) => {
  const { state, descriptors, navigation } = props;
  const dispatch = useDispatch();
  const firstOpen: boolean = useSelector(
    (state: StateRedux) => state?.auth?.firstOpen,
  );
  const conversationList = useSelector(
    (state: any) => state?.chat?.conversationList?.conversations,
  );
  const newRoomLiked: boolean = useSelector(
    (state: StateRedux) => state?.matches?.newRoomLiked,
  );
  // const matches = useSelector((state: StateRedux) => state.matches);
  // const {likeRoom} = matches;
  // const list = likeRoom?.list;

  // const checkUnseenLikedMatches = () => {
  //   if (list.length === 0) return false;
  //   return list
  //     .map(item => !item.checkInfor)
  //     .toString()
  //     .includes('false');
  // };

  const checkUnreadMessage = () => {
    if (conversationList.length === 0) return false;
    return conversationList
      .map((item: any) => {
        reactotron.log!(item, 'obj')
        if (typeof item?.lastMess === 'object') return item?.lastMess?.seen;
      })
      .toString()
      .includes('false');
  };
  const renderLable = (key: string) => {
    switch (key) {
      case MATCHES_TENANT:
        return 'Matches';
      case LIKED_TENANT:
        return 'Liked';
      case CHAT_TENANT:
        return 'Chat';
      default:
        return 'Profile';
    }
  };

  React.useEffect(() => {
    dispatch(getLikeRoomTenant({ search: '' }));
  }, []);
  React.useEffect(() => {
    dispatch(getConversationList(''));
  }, [])
  const onPress = (route: string) => {
    navigation.navigate(route);
  };

  if (firstOpen) return null;
  return (
    <View style={styles.flexRow} key={state.key}>
      {state.routes.map((route: routeType, index: Number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const labelStyle = isFocused ? styles.labelActive : styles.label;
        const isChat = route.name === CHAT_TENANT;
        let SourceName;
        switch (route.name) {
          case MATCHES_TENANT:
            SourceName = IconMatches;
            break;
          case LIKED_TENANT:
            SourceName = newRoomLiked ? IconLikedNoti : IconLiked;
            break;
          case CHAT_TENANT:
            SourceName = IconChat;
            break;
          default:
            SourceName = IconProfile;
            break;
        }
        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            activeOpacity={0.85}
            onPress={() => onPress(route.name)}
            style={[styles.contain]}>
            <SourceName isActive={isFocused} />
            <AppText style={labelStyle}>{renderLable(route.name)}</AppText>
            {isChat && checkUnreadMessage() && <View style={styles.newMsg} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Tab = createBottomTabNavigator();

export function TenantBottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTab {...props} />}>
      <Tab.Screen name={MATCHES_TENANT} component={MatchesTenant} />
      <Tab.Screen name={LIKED_TENANT} component={LikedMatches} />
      <Tab.Screen name={CHAT_TENANT} component={Chat} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    // alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    borderTopColor: colors.borderProfileList,
    borderTopWidth: 1,
    backgroundColor: colors.white,
    ...ifIphoneX(
      {
        paddingTop: 10,
        height: scaleHeight(100),
        maxHeight: 100,
      },
      {
        paddingTop: 10,
        height: scaleHeight(95),
        maxHeight: 100,
      },
    ),
  },
  contain: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    position: 'relative',
  },
  line: {
    height: 2,
    position: 'absolute',
    top: -1.5,
  },
  label: {
    color: colors.icTabbar,
    ...fontFamily.fontCampWeight500,
    fontSize: scaleSize(12),
    lineHeight: scaleSize(15),
    marginTop: 5,
  },
  labelActive: {
    color: colors.textPlace,
    ...fontFamily.fontCampWeight500,
    fontSize: scaleSize(12),
    lineHeight: scaleSize(15),
    marginTop: 5,
  },
  newMsg: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.orange,
    position: 'absolute',
    right: 0,
    top: -2,
  },
});
