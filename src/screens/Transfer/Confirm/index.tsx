import React from 'react';
import {Image, View} from 'react-native';
import PinInput from '@components/PinInput';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AppScreen from '@components/AppScreen';
import AppText from '@components/AppText';
import BackButton from '@components/BackButton';
import styles from './styles';
import {px} from '@helpers/responsiveness';

const Confirm = () => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <AppScreen
      contentContainerStyle={[
        styles.container,
        {
          paddingTop: top,
          paddingBottom: bottom,
        },
      ]}>
      <View style={styles.header}>
        <BackButton />
        <AppText style={styles.headerTitle}>Confirm</AppText>
        <View style={styles.right} />
      </View>
      <View
        style={{
          gap: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('@assets/images/kuda.png')}
          resizeMode="cover"
          style={{
            backgroundColor: '#01010140',
            height: 80,
            borderRadius: 8,
            aspectRatio: 1,
          }}
        />
        {/* <View
					style={{
						backgroundColor: colors.GREY_01,
						height: heightPercentageToDP(10),
						borderRadius: 8,
						aspectRatio: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<BankSvg />
				</View> */}
        <AppText
          style={{
            textAlign: 'center',
            fontSize: px(16),
          }}>
          You are about to send{' '}
          <AppText
            style={{
              fontWeight: '700',
            }}>
            NGN 50,000
          </AppText>{' '}
          to{' '}
          <AppText
            style={{
              fontWeight: '700',
            }}>
            Ahmad Garba
          </AppText>{' '}
        </AppText>
        <PinInput />
      </View>
    </AppScreen>
  );
};

export default Confirm;
