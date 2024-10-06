import {onboardingItems} from '@constants/content';
import React, {useCallback, useState} from 'react';
import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
  useWindowDimensions,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styles from './styles';
import colors from '@theme/colors';
import AppText from '@components/AppText';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import ButtonSecondary from '@components/Buttons/buttonSecondary';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';

export default function () {
  const {width} = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      setActiveIndex(Math.round(event.nativeEvent.contentOffset.x / width));
    },
    [width],
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.imagesContainer}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate="fast"
        horizontal
        onScroll={handleScroll}
        initialScrollIndex={activeIndex}
        keyExtractor={({text}) => `slider-${text}`}
        data={onboardingItems}
        renderItem={({item}) => {
          return (
            <Image
              style={[
                styles.onboardingImage,
                {
                  width,
                },
              ]}
              source={item.image}
            />
          );
        }}
      />
      <View
        style={[
          styles.bottomContainer,
          {
            paddingBottom: bottom + 10,
          },
        ]}>
        <View style={styles.indicatorContainer}>
          {onboardingItems.map((_, key) => {
            return (
              <View
                style={[
                  styles.indicator,
                  {
                    backgroundColor:
                      key === activeIndex
                        ? colors.BLUE_01
                        : styles.indicator.backgroundColor,
                  },
                ]}
                key={key}
              />
            );
          })}
        </View>
        <AppText style={styles.text}>
          {onboardingItems[activeIndex].text}
        </AppText>
        <View style={styles.buttonContainer}>
          <ButtonSecondary
            onPress={() => navigate(NAVIGATION_ROUTES.LOGIN)}
            title="Login"
            style={styles.button}
          />
          <ButtonPrimary
            onPress={() => navigate(NAVIGATION_ROUTES.USER_ONBOARDING_FLOW)}
            title="Sign Up"
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
}
