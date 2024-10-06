import AppText from '@components/AppText';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import BackButton from '@components/BackButton';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import TextInput from '@components/TextInput';
import {Pressable} from 'react-native';
import colors from '@theme/colors';

export default () => {
  return (
    <AppScreen contentContainerStyle={[styles.container]}>
      <View style={styles.sheetHeader}>
        <View style={styles.flexContainer}>
          <BackButton />
        </View>
      </View>
      <View>
        <AppText style={styles.header}>Confirm your details</AppText>
      </View>
      <View
        style={{
          gap: 20,
        }}>
        <View
          style={{
            gap: 15,
          }}>
          <View
            style={{
              gap: 5,
            }}>
            <AppText>Billing Address</AppText>
            <AppText
              style={{
                opacity: 0.8,
              }}>
              5 Ikoyi Godason, Lagos
            </AppText>
          </View>
          <Pressable>
            <AppText
              style={{
                color: colors.BLUE_02,
                fontWeight: '600',
              }}>
              Change
            </AppText>
          </Pressable>
        </View>
        <TextInput placeholder="Phone Number" />
      </View>
      <AppText style={[styles.writeUp, {opacity: 0.8}]} />
      <View style={{flex: 1}} />
      <ButtonPrimary title="Continue" onPress={() => {}} />
    </AppScreen>
  );
};
