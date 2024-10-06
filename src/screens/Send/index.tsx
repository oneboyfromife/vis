import AppText from '@components/AppText';
import TextInput from '@components/TextInput';
import useUsernameEnquiry from '@hooks/useUsernameEnquiry';
import React, {useEffect, useRef, useState} from 'react';
import {Pressable, ScrollView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {EInputTypes} from 'types/enums';
import {UsernameEnquiryData} from 'types/index';
import styles from './styles';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import {Icon} from '@components/Icon';
import AviationModal, {
  AviationModalRef,
} from '@components/AviationOptionsModal';
import colors from '@theme/colors';

const Send = () => {
  const [tag, setTag] = useState<string | null>(null);

  const [foundUser, setFoundUser] = useState<UsernameEnquiryData | null>(null);

  const {checkUsername, isEnquiryError, enquiryError} = useUsernameEnquiry(
    tag || '',
    {
      onSuccess(data) {
        if (data.data) {
          setFoundUser(data.data);
        }
      },
    },
  );

  useEffect(() => {
    if (tag && tag !== '') {
      checkUsername();
    }
  }, [tag, checkUsername]);

  const aviationModelRef = useRef<AviationModalRef | null>(null);

  return (
    <>
      <View style={styles.semiContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            inputType={EInputTypes.EMAIL}
            keyboardType="email-address"
            onEndEditing={e => setTag(e.nativeEvent.text)}
            returnKeyLabel="done"
            onChange={() => setFoundUser(null)}
            returnKeyType="search"
            placeholder="Visaro ID"
          />
          <View>
            {isEnquiryError && (
              <AppText style={styles.errorText}>
                {enquiryError?.message}
              </AppText>
            )}
          </View>
          {foundUser && (
            <TouchableOpacity
              onPress={() => {
                if (foundUser && tag) {
                  navigate(NAVIGATION_ROUTES.TRANSFER_FLOW, {
                    jumpTo: NAVIGATION_ROUTES.AMOUNT,
                    data: {
                      username: tag,
                      transferType: 'intra',
                      recipientName: foundUser.full_name,
                    },
                  });
                }
              }}
              activeOpacity={0.8}
              style={styles.card}>
              <View style={styles.cardIcon}>
                <Icon name="user" />
              </View>
              <View style={styles.cardContent}>
                <AppText style={styles.title}>{foundUser.full_name}</AppText>
                <AppText style={styles.subTitle}>Visaro User</AppText>
              </View>
              <View style={styles.cardIcon}>
                <Icon name="arrow-right" />
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <AppText style={styles.sectionTitle}>Top Contacts</AppText>
          <Pressable>
            <AppText style={styles.seeAlltext}>All Contacts</AppText>
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
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <AppText style={styles.sectionTitle}>Quick Features</AppText>
        </View>
        <View style={styles.featuresContainer}>
          <TouchableOpacity
            onPress={() => navigate(NAVIGATION_ROUTES.TRANSFER_FLOW)}
            style={styles.feature}>
            <View
              style={{
                backgroundColor: colors.ORANGE_01,
                borderRadius: 100,
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: 1,
              }}>
              <Icon name="bank" color="white" weight="bold" size={24} />
            </View>
            <AppText style={styles.featureText}>To a bank account</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.feature}>
            <View
              style={{
                backgroundColor: '#5FCF86',
                borderRadius: 100,
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: 1,
              }}>
              <Icon name="wallet" color="white" size={24} />
            </View>
            <AppText style={styles.featureText}>Visaro Wallet</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => aviationModelRef?.current?.openModal()}
            style={styles.feature}>
            <View
              style={{
                backgroundColor: colors.BLUE_01,
                borderRadius: 100,
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: 1,
              }}>
              <Icon name="airplane" color="white" weight="bold" size={24} />
            </View>
            <AppText style={styles.featureText}>Aviation BNPL</AppText>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => aviationModelRef?.current?.openModal()}
            style={styles.feature}>
            <View
              style={{
                backgroundColor: colors.BLUE_02,
                borderRadius: 100,
                width: 55,
                justifyContent: 'center',
                alignItems: 'center',
                aspectRatio: 1,
              }}>
              <Icon
                name="first-aid-kit"
                color="white"
                weight="bold"
                size={24}
              />
            </View>
            <AppText style={styles.featureText}>HMOs BNPL</AppText>
          </TouchableOpacity>
        </View>
      </View>
      <AviationModal ref={aviationModelRef} />
    </>
  );
};

export default Send;
