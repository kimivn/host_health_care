import {AppText} from '../../component';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, fontFamily, scaleHeight, scaleSize} from '../../theme';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import {IconHome, IconMyJob, IconSearch, IconTimeCard} from '../../assets';
import {Home, Search} from '../../screens';
import {HOME, MY_JOB, SEARCH, TIME_CARD} from '../routeName';

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
  const {state, descriptors, navigation} = props;
  const renderLabel = (key: string) => {
    switch (key) {
      case HOME:
        return 'Home';
      case SEARCH:
        return 'Search';
      case MY_JOB:
        return 'My Job';
      default:
        return 'Timecard';
    }
  };

  const onPress = (route: string) => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.flexRow} key={state.key}>
      {state.routes.map((route: routeType, index: Number) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        const labelStyle = isFocused ? styles.labelActive : styles.label;
        let SourceName;
        switch (route.name) {
          case HOME:
            SourceName = IconHome;
            break;
          case SEARCH:
            SourceName = IconSearch;
            break;
          case MY_JOB:
            SourceName = IconMyJob;
            break;
          default:
            SourceName = IconTimeCard;
            break;
        }
        return (
          <TouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            activeOpacity={0.85}
            onPress={() => onPress(route.name)}
            style={[styles.contain]}>
            <SourceName iconFillColor={isFocused ? 'black' : '#868686'} />
            <AppText style={labelStyle}>{renderLabel(route.name)}</AppText>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Tab = createBottomTabNavigator();

export function MainBottomBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTab {...props} />}>
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={MY_JOB} component={Search} />
      <Tab.Screen name={TIME_CARD} component={Search} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: 'white',
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
    color: colors.textSecondPrimary,
    ...fontFamily.fontWeight500,
    fontSize: scaleSize(12),
    lineHeight: scaleSize(18),
    marginTop: 5,
  },
  labelActive: {
    color: 'black',
    ...fontFamily.fontWeight500,
    fontSize: scaleSize(12),
    lineHeight: scaleSize(18),
    marginTop: 5,
  },
});
