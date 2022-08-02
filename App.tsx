import React from 'react';
import {StatusBar} from 'react-native';
import NavigationApp from './src/navigation/StackContainer';
import {NavigationUtils} from './src/navigation/NavigationUtils';
import {useObserver} from 'mobx-react';

const App = () => {
  return useObserver(() => (
    <>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor="transparent"
      />
      <NavigationApp
        ref={(navigatorRef: any) =>
          NavigationUtils.setTopLevelNavigator(navigatorRef)
        }
      />
    </>
  ));
};

export default App;
