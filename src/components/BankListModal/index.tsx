import AppText from '@components/AppText';
import {Icon} from '@components/Icon';
import useBankList from '@hooks/useBankList';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {
  Image,
  Keyboard,
  Modal,
  Pressable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Bank} from 'types/index';
import styles from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TextInput from '@components/TextInput';
import {FlatList} from 'react-native-gesture-handler';
import colors from '@theme/colors';

export interface BankListModalRef {
  open: () => void;
  close: () => void;
}

const BankListModal = forwardRef<
  BankListModalRef,
  {
    onSelect: (bank: Bank) => void;
    selected?: string;
  }
>(({onSelect, selected}, ref) => {
  const {top} = useSafeAreaInsets();
  const {bankListData} = useBankList();

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
            <AppText style={styles.modalWriteUpHeading}>Select bank</AppText>
            <AppText style={styles.modalWriteUp}>
              Kindly select receipient's bank
            </AppText>
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
          {bankListData?.data && (
            <FlatList
              style={styles.bankList}
              data={bankListData.data
                .filter(
                  bank =>
                    bank.bank_name
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    bank.bank_code.includes(search.toLowerCase()),
                )
                .sort((a, b) => (a.bank_name < b.bank_name ? -1 : 1))}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      onSelect(item);
                      setIsOpen(false);
                    }}
                    style={styles.bankItem}>
                    <View style={styles.bank}>
                      <Image
                        style={styles.bankLogo}
                        source={{
                          uri: item.display_img,
                        }}
                      />
                      <AppText>{item.bank_name}</AppText>
                    </View>
                    {selected === item.bank_code && (
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

export default BankListModal;
