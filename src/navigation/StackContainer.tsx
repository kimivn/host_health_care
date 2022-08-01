import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {useDispatch, useSelector} from 'react-redux';
import UnAuthenStack from './unauthenstack';
// import TenantStack from './tenant';
// import HomeownerStack from './homeowner';
// import AgentStack from './agent';
// import SignupStack from './signup';

//main stack app
const NavigationApp = React.forwardRef((props: any, ref: any) => {
  const renderStackApp = () => {
    return <UnAuthenStack />;
  };
  return (
    <NavigationContainer ref={ref}>{renderStackApp()}</NavigationContainer>
  );
});

export default NavigationApp;
