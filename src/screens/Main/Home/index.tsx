import {useNavigation} from '@react-navigation/core';
import React, {MutableRefObject, useRef} from 'react';
import {View, Image, FlatList, Pressable} from 'react-native';
import {styles} from './style';
import {credentialing, IconBack, timecards} from '../../../assets';
import {
  Header,
  AppText,
  SuggestItem,
  PopularItem,
  AppModal,
} from '../../../component';
import {POPULAR_CITY_DATA, SUGGEST_DATA} from '../../../mocks';
import {RefModal} from '../../../interfaces';

interface screenNavigationProp {
  navigate: any;
}

const Home = () => {
  const navigation = useNavigation<screenNavigationProp>();
  const suggest = SUGGEST_DATA;
  const popular = POPULAR_CITY_DATA;
  const refModal = useRef() as MutableRefObject<RefModal>;

  const onSubmit = () => {
    refModal.current.openModal();
  };

  const onPopular = () => {
    navigation.navigate('POPULAR_CITY');
  };

  const onJobDetail = () => {
    navigation.navigate('JOB_DETAIL');
  };

  const onSuggestJob = () => {
    navigation.navigate('SUGGEST_JOB');
  };

  return (
    <View style={styles.container}>
      <Header title="HOME" />
      <FlatList
        data={[0]}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <>
            <View style={styles.body}>
              <Block
                image={timecards}
                title={'Timecards'}
                description={
                  'Easily upload images of \nyour timecards for quick processing.'
                }
              />
              <Block
                image={credentialing}
                title={'Credentialing'}
                description={
                  'Add information for background \ncheck and I9. (Links to Essium)'
                }
              />

              <View>
                <Pressable style={styles.flexRow} onPress={onSuggestJob}>
                  <AppText style={styles.title}>{'Suggested'}</AppText>
                  <IconBack style={styles.iconNext} />
                </Pressable>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={suggest}
                  renderItem={({item}) => (
                    <SuggestItem
                      item={item}
                      onSubmit={onSubmit}
                      onPress={onJobDetail}
                    />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
              <View>
                <Pressable style={styles.flexRow} onPress={onPopular}>
                  <AppText style={styles.title}>{'Popular cities'}</AppText>
                  <IconBack style={styles.iconNext} />
                </Pressable>
                <FlatList
                  data={popular}
                  renderItem={({item}) => (
                    <PopularItem item={item} onPress={onSuggestJob} />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </View>
          </>
        )}
        keyExtractor={(item, index) => index.toString()}
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

const Block = ({
  image,
  title,
  description,
}: {
  image: any;
  title: string;
  description: string;
}) => {
  return (
    <View style={styles.block}>
      <Image source={image} style={styles.blockImage} />
      <View>
        <AppText style={styles.blockTitle}>{title}</AppText>
        <AppText style={styles.blockDescription}>{description}</AppText>
      </View>
    </View>
  );
};

export {Home};
