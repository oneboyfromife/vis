import AppText from '@components/AppText';
import React, {useContext} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import BackButton from '@components/BackButton';
import {paymentModeData} from '@constants/content';
import {navigate} from '@helpers/navigation';
import {SignUpContext} from 'src/context/SignUpContext';
import {Icon} from '@components/Icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default () => {
  const {setAccountType} = useContext(SignUpContext);

  const {top} = useSafeAreaInsets();

  return (
    <AppScreen
      contentContainerStyle={[
        styles.container,
        {
          paddingTop: top,
          paddingBottom: 10,
        },
      ]}>
      <View style={styles.sheetHeader}>
        <View style={styles.flexContainer}>
          <BackButton />
        </View>
      </View>
      <View>
        <AppText style={styles.header}>Select Payment Mode</AppText>
        <AppText style={styles.writeUp}>
          What Visaro account type do you want?
        </AppText>
      </View>
      <View>
        {paymentModeData.map(({title, subtitle, iconName, route, type}) => (
          <TouchableOpacity
            key={title}
            style={styles.actionCard}
            onPress={() => {
              setAccountType(type as 'personal' | 'business');
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
      <AppText style={[styles.writeUp]}>
        The merchant has requested an authorisation for this payment and the
        final payment amount may change when the merchant completes the order.
        The merchant requires your billing address to complete this payment.
      </AppText>
    </AppScreen>
  );
};
