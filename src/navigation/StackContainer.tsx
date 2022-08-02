import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {useDispatch, useSelector} from 'react-redux';
import AuthenticationStack from './AuthenticationStack';
import MainStack from './MainStack';
import {useStores} from '../stores';
import {useObserver} from 'mobx-react';

//main stack app
const NavigationApp = React.forwardRef((props: any, ref: any) => {
  const {userStore} = useStores();

  const renderStackApp = () => {
    console.log(222, userStore.user);
    if (userStore.user.token !== '') {
      return <MainStack />;
    }
    return <AuthenticationStack />;
  };
  return useObserver(() => (
    <NavigationContainer ref={ref}>{renderStackApp()}</NavigationContainer>
  ));
});

export default NavigationApp;
