import AppText from '@components/AppText';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackButton from '@components/BackButton';
import {transferTypeData} from '@constants/content';
import {navigate} from '@helpers/navigation';
import {Icon} from '@components/Icon';

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <AppScreen
      contentContainerStyle={[
        styles.container,
        {
          paddingBottom: bottom,
        },
      ]}
      header={
        <View style={[styles.header, {paddingTop: top}]}>
          <BackButton />
          <AppText style={styles.headerTitle}>Transfer</AppText>
          <View style={styles.right} />
        </View>
      }>
      <View>
        {transferTypeData.map(({title, subtitle, iconName, route}) => (
          <TouchableOpacity
            key={title}
            style={styles.actionCard}
            onPress={() => {
              navigate(route);
            }}>
            <View style={styles.iconContainer}>
              <Icon name={iconName || ''} />
            </View>
            <View style={styles.titleContainer}>
              <AppText style={styles.title}>{title}</AppText>
              <AppText style={styles.subtitle}>{subtitle}</AppText>
            </View>
            <Icon name="arrow-right" />
          </TouchableOpacity>
        ))}
      </View>
    </AppScreen>
  );
};
