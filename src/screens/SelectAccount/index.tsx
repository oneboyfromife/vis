import AppText from '@components/AppText';
import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import AppScreen from '@components/AppScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BackButton from '@components/BackButton';
import {accountTypeData} from '@constants/content';
import {navigate} from '@helpers/navigation';
import {SignUpContext} from 'src/context/SignUpContext';
import {Icon} from '@components/Icon';

export default () => {
  const {top, bottom} = useSafeAreaInsets();

  const {setAccountType} = useContext(SignUpContext);

  return (
    <AppScreen
      contentContainerStyle={[
        styles.container,
        {
          paddingTop: top,
          paddingBottom: bottom,
        },
      ]}>
      <View>
        <BackButton />
      </View>
      <View>
        <AppText style={styles.header}>Select the account type</AppText>
        <AppText style={styles.writeUp}>
          What Visaro account type do you want?
        </AppText>
      </View>
      <View>
        {accountTypeData.map(({title, subtitle, iconName, route, type}) => (
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
    </AppScreen>
  );
};
