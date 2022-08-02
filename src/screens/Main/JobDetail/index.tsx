import React, {MutableRefObject, useRef} from 'react';
import {View, Image, StyleSheet, Pressable, ScrollView} from 'react-native';
import {
  IconCalendar,
  IconJob,
  IconLike,
  IconLocation,
  IconShare,
  IconSun,
} from '../../../assets';
import {AppButton, AppModal, AppText} from '../../../component';
import {RefModal} from '../../../interfaces';
import {JOB_DETAIL_DATA} from '../../../mocks';
import {styles} from './style';

const JobDetail = () => {
  const refModal = useRef() as MutableRefObject<RefModal>;

  const onSubmit = () => {
    refModal.current.openModal();
  };

  const renderItem = (name: string, value: string) => {
    return (
      <View style={styles.blockItemView}>
        <AppText style={styles.blockItemName}>{name}</AppText>
        <AppText style={styles.blockItemValue}>{value}</AppText>
      </View>
    );
  };

  const {
    image,
    company,
    name,
    specialized,
    location,
    duration,
    shift,
    estimated,
    point,
    license,
    licenseState,
  } = JOB_DETAIL_DATA;
  return (
    <ScrollView style={styles.block}>
      <View>
        <View style={styles.locationView}>
          <IconLocation />
          <AppText style={styles.locationName}>{location}</AppText>
        </View>
        <Image source={image} style={styles.suggestImage} />
        <View style={styles.suggestIconTop}>
          <IconLike />
          <IconShare />
        </View>
      </View>

      <View style={styles.blockBody}>
        <View style={styles.spaceBetween}>
          <View>
            <AppText style={styles.name}>{name}</AppText>
            <AppText style={styles.company}>{company}</AppText>
            <View style={styles.flexRow}>
              <IconJob />
              <AppText style={styles.specialized}>{specialized}</AppText>
            </View>
            <View style={styles.flexRow}>
              <IconCalendar />
              <AppText style={styles.specialized}>{duration}</AppText>
            </View>
            <View style={styles.flexRow}>
              <IconSun />
              <AppText style={styles.specialized}>{shift}</AppText>
            </View>
          </View>
          <View>
            <View style={styles.pointView}>
              <AppText style={styles.point}>{point * 100}</AppText>
            </View>
            <AppText style={styles.match}>{'% match'}</AppText>
          </View>
        </View>
        <AppText style={styles.estimate}>
          {'Estimated '}
          <AppText style={styles.estimateValue}>{estimated}</AppText>
          {' /wk'}
        </AppText>

        <View style={styles.blockDetail}>
          <AppText style={styles.blockDetailTitle}>{'Details'}</AppText>
          {renderItem('Discipline', name)}
          {renderItem('Specialty', specialized)}
          {renderItem('Duration', duration)}
          {renderItem('Shift', shift)}
        </View>

        <View style={styles.blockDetail}>
          <AppText style={styles.blockDetailTitle}>{'Requirements'}</AppText>
          {renderItem('License', license)}
          {renderItem('License State', licenseState)}
        </View>
      </View>

      <View style={styles.buttonBlock}>
        <AppButton
          title="TEll me more"
          customStyleButton={{borderRadius: 30}}
          typeButton={'linear'}
          containerStyle={{width: '48%'}}
        />
        <AppButton
          title="PLEASE SUBMIT"
          customStyleButton={{borderRadius: 30}}
          onPress={onSubmit}
          containerStyle={{width: '48%'}}
        />
      </View>
      <AppModal ref={refModal}>
        <AppText style={styles.titleModal}>
          {'Your request has been submitted'}
        </AppText>
        <AppText style={styles.descriptionModal}>
          {'Your recruiter will contact you shortly'}
        </AppText>
      </AppModal>
    </ScrollView>
  );
};

export {JobDetail};
