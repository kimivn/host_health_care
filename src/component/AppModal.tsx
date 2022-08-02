import React, {forwardRef, Ref, useImperativeHandle} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {height, SIZE} from '../theme';
import {AppButton} from '../component';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {RefModal} from '../interfaces';

const AppModal = forwardRef((props: any, ref: Ref<RefModal>) => {
  const {children, onPressDone} = props;

  const offset = useSharedValue(height);
  const style = useAnimatedStyle(() => {
    return {
      top: withTiming(offset.value, {
        duration: 500,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    };
  });

  useImperativeHandle(ref, () => ({
    openModal,
  }));

  const openModal = () => {
    offset.value = 0;
  };

  const onCloseModal = () => {
    offset.value = height;
  };

  const onDone = () => {
    offset.value = height;
    if (onPressDone) onPressDone();
  };

  return (
    <>
      <Animated.View style={[styles.container, style]}>
        <Pressable style={styles.modal} onPress={onCloseModal}>
          <Pressable style={styles.modalBox}>
            {children}
            <AppButton onPress={onDone} title={'OK'} />
          </Pressable>
        </Pressable>
      </Animated.View>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    zIndex: 99999,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.08)',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
  },
  modalBox: {
    backgroundColor: 'white',
    padding: SIZE.padding,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    minHeight: 160,
    marginHorizontal: 16,
  },
});

export {AppModal};
