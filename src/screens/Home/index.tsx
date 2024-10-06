import AppScreen from '@components/AppScreen';
import React, {FC, useRef, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {Pressable, View, Image, FlatList} from 'react-native';
import {Icon} from '@components/Icon';
import AppText from '@components/AppText';
import {WIDTH} from '@constants/screen';
import useDashboard from '@hooks/useDashboard';
import {formatAsMoney} from '@helpers/numbers';
import colors from '@theme/colors';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import useMoment from '@hooks/useMoment';
import FastImage from 'react-native-fast-image';
import {useAuth} from 'src/context/AuthContext';
import ScanQRModal from '@components/ScanQRModal';
import CompleteSetupModal from '@components/CompleteSetupModal';
import {ModalRef} from 'types/components';
import CircularProgress from 'react-native-circular-progress-indicator';
import GetPaidModal from '@components/GetPaidModal';
import {BnplService} from 'types/index';
import AviationModal, {
  AviationModalRef,
} from '@components/AviationOptionsModal';

const dummyService: (BnplService & {onPress?: () => void})[] = [
  {
    bnpl_service_name: 'Aviation',
    display_img:
      'https://images.unsplash.com/photo-1517999349371-c43520457b23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbmV8ZW58MHx8MHx8fDA%3D',
    thumbnails:
      'https://images.unsplash.com/photo-1517999349371-c43520457b23?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbmV8ZW58MHx8MHx8fDA%3D',
  },
  {
    bnpl_service_name: 'Education',
    display_img:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
    thumbnails:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGVkdWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D',
  },
];

export default function () {
  const {top, bottom} = useSafeAreaInsets();

  const [lastRefreshed, setLastRefrehsed] = useState<Date | null>(null);

  const moment = useMoment(lastRefreshed);

  const getPaidModalRef = useRef<ModalRef | null>(null);
  const scanQRModalRef = useRef<ModalRef | null>(null);
  const completeSetupModalRef = useRef<ModalRef | null>(null);

  const {user} = useAuth();

  const {dashboardData, refreshDashboard, fetchingDashboard} = useDashboard({
    onSuccess() {
      setLastRefrehsed(new Date());
    },
  });

  const scrollX = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler({
    onScroll({contentOffset: {x}}) {
      scrollX.value = (x / WIDTH) * 30;
    },
  });

  const indicatorStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(scrollX.value, [0, 15, 30], [30, 20, 30]),
      transform: [
        {
          translateX: scrollX.value,
        },
      ],
    };
  }, [scrollX.value]);

  const aviationModelRef = useRef<AviationModalRef | null>(null);

  const handleClick = (item: BNPLService) => {
    if (item.bnpl_service_name === 'Aviation') {
      aviationModelRef?.current?.openModal();
    } else if (item.bnpl_service_name === 'Education') {
      navigate(NAVIGATION_ROUTES.MERCHANTS_FLOW);
    }
  };

  return (
    <>
      <AppScreen
        refreshing={fetchingDashboard}
        onRefresh={() => refreshDashboard()}
        contentContainerStyle={[
          styles.container,
          {
            paddingTop: top,
            paddingBottom: bottom,
          },
        ]}>
        <View style={styles.headerContainer}>
          <Pressable
            onPress={() => {
              navigate(NAVIGATION_ROUTES.ACCOUNT);
            }}
            style={styles.headerYouButton}>
            <FastImage source={{uri: user?.photo}} style={styles.avatar} />
            <Icon name="user" size={28} />
          </Pressable>
          <Pressable
            onPress={() => {
              getPaidModalRef.current?.openModal();
            }}
            style={styles.headerYouButton}>
            <Icon name="qr-code" size={28} />
          </Pressable>
        </View>
        <View style={styles.balanceContainer}>
          <Animated.ScrollView
            onScroll={handleScroll}
            horizontal
            scrollEventThrottle={60}
            contentContainerStyle={styles.balanceCardContainer}
            snapToInterval={WIDTH}
            decelerationRate="fast"
            showsHorizontalScrollIndicator={false}>
            <View style={styles.balanceCard}>
              <Image
                source={require('@assets/images/visaro-avatar.png')}
                style={styles.balanceImage}
              />
              <View>
                <AppText style={styles.balanceTitle}>Visaro Balance</AppText>
                <AppText style={styles.balance}>
                  ₦{' '}
                  {formatAsMoney(
                    dashboardData?.data?.wallet?.visaro_balance || 0,
                  )}
                </AppText>
                <AppText style={styles.balanceSubtitle}>
                  {lastRefreshed && `Last updated ${moment}`}
                </AppText>
              </View>
            </View>
            <View style={styles.balanceCard}>
              <Image
                source={require('@assets/images/visaro-credit-avatar.png')}
                style={styles.balanceImage}
              />
              <View>
                <AppText style={styles.balanceTitle}>Visaro Credit</AppText>
                <AppText style={styles.balance}>
                  ₦{' '}
                  {formatAsMoney(
                    dashboardData?.data?.wallet?.visaro_credit || 0,
                  )}
                </AppText>
                <AppText style={styles.balanceSubtitle}>No Payment Due</AppText>
              </View>
            </View>
          </Animated.ScrollView>
          <View style={styles.indicatorContainer}>
            <Animated.View style={[styles.indicator, indicatorStyle]} />
          </View>
        </View>

        <View style={styles.semiContainer}>
          <View style={styles.card}>
            <Image
              source={require('@assets/images/visaro-pay.png')}
              resizeMode="contain"
              style={styles.balanceImage}
            />
            <View style={styles.cardContent}>
              <AppText style={styles.title}>Pay in 3</AppText>
              <AppText style={styles.subTitle}>All Plans Incoming</AppText>
            </View>
            <View style={styles.cardIcon}>
              <Icon name="arrow-right" />
            </View>
          </View>
          <TouchableOpacity
            style={styles.card}
            onPress={() => completeSetupModalRef?.current?.openModal()}>
            <CircularProgress
              value={2}
              radius={30}
              duration={2000}
              valueSuffix="/5"
              maxValue={5}
              progressValueColor={colors.BLUE_01}
              activeStrokeColor={colors.ORANGE_01}
              inActiveStrokeColor={colors.ORANGE_01}
              inActiveStrokeOpacity={0.05}
              progressValueStyle={{
                fontWeight: '400',
              }}
            />
            <View style={styles.cardContent}>
              <AppText style={styles.title}>Set up your account</AppText>
              <AppText style={styles.subTitle}>You’re on a good start!</AppText>
            </View>
            <View style={styles.cardIcon}>
              <Icon name="arrow-right" />
            </View>
          </TouchableOpacity>
          <AppText style={styles.sectionTitle}>Send Payments</AppText>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigate(NAVIGATION_ROUTES.PAYMENTS_FLOW)}
            style={styles.card}>
            <View
              style={[
                styles.cardIcon,
                {
                  transform: [
                    {
                      rotateZ: '90deg',
                    },
                  ],
                },
              ]}>
              <Icon
                name="navigation-arrow"
                weight="fill"
                color={colors.BLUE_02}
                size={20}
              />
            </View>
            <View style={styles.cardContent}>
              <AppText style={styles.title}>Make payments</AppText>
              <AppText style={styles.subTitle}>
                For the things you enjoy
              </AppText>
            </View>
            <View style={styles.cardIcon}>
              <Icon name="arrow-right" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.section]}>
          <View style={styles.sectionHeader}>
            <AppText style={styles.sectionTitle}>Explore</AppText>
            <Pressable>
              <AppText style={styles.seeAlltext}>See All</AppText>
            </Pressable>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            snapToInterval={WIDTH * 0.5}
            decelerationRate="fast"
            contentContainerStyle={styles.serviceContainer}
            data={dummyService}
            renderItem={({item}) => {
              return <BNPLService handleClick={handleClick} item={item} />;
            }}
          />
        </View>
      </AppScreen>
      <GetPaidModal
        handleSecondaryButton={() => scanQRModalRef?.current?.openModal()}
        ref={getPaidModalRef}
      />
      <ScanQRModal ref={scanQRModalRef} />
      <CompleteSetupModal ref={completeSetupModalRef} />
      <AviationModal ref={aviationModelRef} />
    </>
  );
}
const BNPLService: FC<{
  item: BnplService;
  handleClick(item: BnplService): void;
}> = ({item, handleClick}) => {
  return (
    <TouchableOpacity onPress={() => handleClick(item)} style={styles.service}>
      <Image
        source={{
          uri: item.display_img,
        }}
        style={styles.serviceImage}
      />
      <AppText>{item.bnpl_service_name}</AppText>
    </TouchableOpacity>
  );
};
