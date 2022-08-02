import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, AppButton} from '../../../component';
import {useStores} from '../../../stores';

interface screenNavigationProp {
  navigate: any;
}

const Search = () => {
  const {userStore} = useStores();
  const onLogout = () => {
    userStore.onLogout();
  };

  return (
    <View style={styles.container}>
      <Header title="SEARCH" />
      <View style={styles.box}>
        <AppButton title={'LOG OUT'} onPress={onLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
});

export {Search};
