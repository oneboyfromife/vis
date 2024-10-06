import AppText from '@components/AppText';
import {Icon} from '@components/Icon';
import useCountriesList from '@hooks/useCountriesList';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {Keyboard, Modal, Pressable, TouchableOpacity, View} from 'react-native';
import {Country} from 'types/index';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextInput from '@components/TextInput';
import {FlatList} from 'react-native-gesture-handler';
import colors from '@theme/colors';
import {SvgUri} from 'react-native-svg';

export interface CountryListModalRef {
  open: () => void;
  close: () => void;
}

const CountryListModal = forwardRef<
  CountryListModalRef,
  {
    onSelect: (country: Country) => void;
    selected?: string;
  }
>(({onSelect, selected}, ref) => {
  const {top} = useSafeAreaInsets();
  const {countries} = useCountriesList();

  useImperativeHandle(ref, () => ({
    open: () => {
      setIsOpen(true);
    },
    close: () => {
      setIsOpen(false);
    },
  }));

  const [search, setSearch] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      animationType="slide"
      presentationStyle="fullScreen"
      visible={isOpen}>
      <View
        style={[
          styles.modelContainer,
          {
            paddingTop: top,
          },
        ]}>
        <View style={styles.modalHeader}>
          <View style={styles.modalHeadingWriteContainer}>
            <AppText style={styles.modalWriteUpHeading}>Select country</AppText>
            <AppText style={styles.modalWriteUp}>Kindly select country</AppText>
          </View>
          <Pressable
            onPress={() => {
              setIsOpen(false);
              Keyboard.dismiss();
            }}
            style={styles.closeButton}>
            <Icon name="x" weight="bold" />
          </Pressable>
        </View>
        <View style={styles.modalContent}>
          <TextInput
            value={search}
            onChangeText={text => setSearch(text)}
            placeholder="Search"
            style={styles.searchInput}
          />
          {countries && (
            <FlatList
              style={styles.countryList}
              data={countries
                .filter(
                  country =>
                    country.name.toLowerCase().includes(search.toLowerCase()) ||
                    country.code.includes(search.toLowerCase()),
                )
                .sort((a, b) => (a.name < b.name ? -1 : 1))}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      onSelect(item);
                      setIsOpen(false);
                    }}
                    style={styles.countryItem}>
                    <View style={styles.country}>
                      <SvgUri style={styles.countryLogo} uri={item.flag} />
                      <AppText>{item.name}</AppText>
                    </View>
                    {selected === item.code && (
                      <Icon
                        name="check-circle"
                        size={26}
                        weight="fill"
                        color={colors.GREEN_02}
                      />
                    )}
                  </TouchableOpacity>
                );
              }}
            />
          )}
        </View>
      </View>
    </Modal>
  );
});

export default CountryListModal;
