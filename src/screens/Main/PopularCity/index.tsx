import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './style';
import {Header, PopularItem} from '../../../component';
import {POPULAR_CITY_DATA} from '../../../mocks';

interface screenNavigationProp {
  navigate: any;
}

const PopularCity = () => {
  const navigation = useNavigation<screenNavigationProp>();
  const popular = POPULAR_CITY_DATA;

  const onSuggestJob = () => {
    navigation.navigate('SUGGEST_JOB');
  };

  return (
    <View style={styles.container}>
      <Header title="Matches in popular cities" back />
      <FlatList
        data={popular}
        renderItem={({item}) => (
          <PopularItem item={item} onPress={onSuggestJob} />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{padding: 16}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export {PopularCity};
