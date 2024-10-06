import AppScreen from '@components/AppScreen';
import AppText from '@components/AppText';
import colors from '@theme/colors';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Wallet from '@screens/Wallet';

const tabs = ['Wallet', 'History'];

const Wallets = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const {top, bottom} = useSafeAreaInsets();

  return (
    <>
      <AppScreen
        contentContainerStyle={[
          styles.container,
          {
            paddingTop: top,
            paddingBottom: bottom,
          },
        ]}
        scrollEnabled={false}>
        <View style={styles.semiContainer}>
          <AppText style={styles.screenHeaderTitle}>Wallets</AppText>
          <View style={styles.tabs}>
            {tabs.map((tab, i) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setActiveTabIndex(i)}
                  key={i}
                  style={[
                    styles.tab,
                    {
                      backgroundColor:
                        activeTabIndex === i
                          ? colors.ORANGE_02
                          : styles.tab.backgroundColor,
                    },
                  ]}>
                  <AppText
                    style={[
                      styles.tabText,
                      {
                        color:
                          activeTabIndex === i
                            ? styles.tabText.color
                            : colors.BLACK,
                      },
                    ]}>
                    {tab}
                  </AppText>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {activeTabIndex === 0 && <Wallet />}
      </AppScreen>
    </>
  );
};

export default Wallets;
