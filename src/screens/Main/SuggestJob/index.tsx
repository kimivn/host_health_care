import {useNavigation} from '@react-navigation/core';
import React, {MutableRefObject, useRef} from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './style';
import {AppModal, AppText, Header, SuggestItem} from '../../../component';
import {SUGGEST_DATA} from '../../../mocks';
import {RefModal} from '../../../interfaces';

interface screenNavigationProp {
  navigate: any;
}

const SuggestJob = () => {
  const navigation = useNavigation<screenNavigationProp>();
  const suggest = SUGGEST_DATA;
  const refModal = useRef() as MutableRefObject<RefModal>;

  const onSubmit = () => {
    refModal.current.openModal();
  };

  const onJobDetail = () => {
    navigation.navigate('JOB_DETAIL');
  };

  return (
    <View style={styles.container}>
      <Header title="Chicago" back />
      <FlatList
        data={suggest}
        renderItem={({item}) => (
          <SuggestItem item={item} onSubmit={onSubmit} onPress={onJobDetail} />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{padding: 16}}
        showsVerticalScrollIndicator={false}
      />

      <AppModal ref={refModal}>
        <AppText style={styles.titleModal}>
          {'Your request has been submitted'}
        </AppText>
        <AppText style={styles.descriptionModal}>
          {'Your recruiter will contact you shortly'}
        </AppText>
      </AppModal>
    </View>
  );
};

export {SuggestJob};
