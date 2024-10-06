import AppText from '@components/AppText';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackButton from '@components/BackButton';
import {Icon} from '@components/Icon';
import {useAuth} from 'src/context/AuthContext';
import colors from '@theme/colors';
import {px} from '@helpers/responsiveness';
import {navigate} from '@helpers/navigation';
import TextInput from '@components/TextInput';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  const {user} = useAuth();

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
          <AppText style={styles.headerTitle}>Email Address</AppText>
          <View style={styles.right} />
        </View>
      }>
      <View
        style={{
          gap: 20,
          paddingTop: 40,
        }}>
        <View
          style={{
            gap: 10,
          }}>
          <AppText
            style={{
              fontSize: px(28),
              fontWeight: '500',
            }}>
            Change email address
          </AppText>
          <AppText
            style={{
              opacity: 0.8,
            }}>
            Making any changes to this will be updated with the email address
          </AppText>
        </View>
        <TextInput placeholder="Email Address" />
        <View />
        <ButtonPrimary
          title="Save Changes"
          onPress={() => {
            navigate(NAVIGATION_ROUTES.CONFIRM_PASSWORD);
          }}
        />
      </View>
    </AppScreen>
  );
};
