import AppText from '@components/AppText';
import React from 'react';
import {Pressable, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import {Icon} from '@components/Icon';
import FastImage from 'react-native-fast-image';
import {navigate} from '@helpers/navigation';

const billProviders = {
  airtime: [
    {
      name: 'Airtel',
      logoURI: 'https://nigerialogos.com/logos/airtel/airtel.png',
    },
    {
      name: 'MTN',
      logoURI: 'https://nigerialogos.com/logos/mtn/mtn.png',
    },
    {
      name: 'Glo',
      logoURI: 'https://nigerialogos.com/logos/glo/glo.png',
    },
    {
      name: '9mobile',
      logoURI: 'https://nigerialogos.com/logos/9mobile/9mobile.png',
    },
  ],
  data: [
    {
      name: 'Airtel',
      logoURI: 'https://nigerialogos.com/logos/airtel/airtel.png',
    },
    {
      name: 'MTN',
      logoURI: 'https://nigerialogos.com/logos/mtn/mtn.png',
    },
    {
      name: 'Glo',
      logoURI: 'https://nigerialogos.com/logos/glo/glo.png',
    },
    {
      name: '9mobile',
      logoURI: 'https://nigerialogos.com/logos/9mobile/9mobile.png',
    },
  ],
  electricity: [
    {
      name: 'IKEDC',
      logoURI: '',
    },
    {
      name: 'IBEDC',
      logoURI: '',
    },
    {
      name: 'EEDC',
      logoURI: '',
    },
    {
      name: 'FCTDC',
      logoURI: '',
    },
  ],
};

const Bills = () => {
  return (
    <>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <AppText style={styles.sectionTitle}>Airtime</AppText>
          <Pressable>
            <AppText style={styles.seeAlltext}>See All</AppText>
          </Pressable>
        </View>
        <View style={styles.contactsContainer}>
          {billProviders.airtime.map((provider, i) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigate('/buy-airtime', {
                    provider,
                  })
                }
                key={i}
                style={styles.contact}>
                <View style={styles.contactAvatar}>
                  <FastImage
                    source={{
                      uri: provider.logoURI,
                    }}
                    resizeMode="contain"
                    style={styles.contactAvatarImage}
                  />
                  <Icon name="wifi-medium" size={28} />
                </View>
                <AppText>{provider.name}</AppText>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <AppText style={styles.sectionTitle}>Data</AppText>
          <Pressable>
            <AppText style={styles.seeAlltext}>See All</AppText>
          </Pressable>
        </View>
        <View style={styles.contactsContainer}>
          {billProviders.data.map((provider, i) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigate('/buy-data', {
                    provider,
                  })
                }
                key={i}
                style={styles.contact}>
                <View style={[styles.contactAvatar, {}]}>
                  <FastImage
                    source={{
                      uri: provider.logoURI,
                    }}
                    resizeMode="contain"
                    style={styles.contactAvatarImage}
                  />
                  <Icon name="wifi-medium" size={28} />
                </View>
                <AppText>{provider.name}</AppText>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <AppText style={styles.sectionTitle}>Electricity</AppText>
          <Pressable>
            <AppText style={styles.seeAlltext}>See All</AppText>
          </Pressable>
        </View>
        <View style={styles.contactsContainer}>
          {billProviders.electricity.map((provider, i) => {
            return (
              <TouchableOpacity key={i} style={styles.contact}>
                <View style={[styles.contactAvatar, {}]}>
                  <FastImage
                    source={{
                      uri: provider.logoURI,
                    }}
                    resizeMode="contain"
                    style={styles.contactAvatarImage}
                  />
                </View>
                <AppText>{provider.name}</AppText>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      {/* <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <AppText style={styles.sectionTitle}>Electricity</AppText>
          <Pressable>
            <AppText style={styles.seeAlltext}>See All</AppText>
          </Pressable>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contactsContainer}>
          <TouchableOpacity style={styles.contact}>
            <View style={styles.contactAvatar}>
              <Icon name="user" size={24} />
            </View>
            <AppText>John Doe</AppText>
          </TouchableOpacity>
        </ScrollView>
      </View> */}
    </>
  );
};

export default Bills;
