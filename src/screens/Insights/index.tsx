import AppText from '@components/AppText';
import React from 'react';
import {Pressable, ScrollView, SectionList, View} from 'react-native';
import styles from './styles';
import {Icon} from '@components/Icon';
import {px} from '@helpers/responsiveness';
import Chart from '@assets/svgs/chart';
import moment from 'moment';
import colors from '@theme/colors';
import {HEIGHT} from '@constants/screen';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

interface Payment {
  type: string;
  status: string;
  amount: number;
  date: Date;
}

const payments: Payment[] = [
  {
    type: 'debit',
    status: 'received',
    amount: 50000,
    date: new Date('04-03-2024'),
  },
  {
    type: 'debit',
    status: 'failed',
    amount: 50000,
    date: new Date('03-03-2024'),
  },
  {
    type: 'credit',
    status: 'failed',
    amount: 74000,
    date: new Date('03-03-2024'),
  },
];

const formatDate = (date: Date) => moment(date).format('DD MMM YYYY');

const Insights = () => {
  const groupedPayments: {[key: string]: Payment[]} = payments.reduce(
    (acc, payment) => {
      const formattedDate = formatDate(payment.date);
      if (!(acc as Record<string, any>)[formattedDate]) {
        (acc as Record<string, any>)[formattedDate] = [];
      }
      (acc as Record<string, any>)[formattedDate].push(payment);
      return acc as Record<string, any>;
    },
    {},
  );

  const sections = Object.keys(groupedPayments).map(date => ({
    title: date,
    data: groupedPayments[date],
  }));

  const bottom = useBottomTabBarHeight();

  return (
    <ScrollView
      style={{
        height: HEIGHT,
      }}>
      <View
        style={{
          marginBottom: bottom * 3,
        }}>
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 20,
            gap: 20,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <AppText
              style={{
                textAlign: 'center',
              }}>
              Total Balance
            </AppText>
            <AppText
              style={{
                fontWeight: '700',
                fontSize: px(48),
                textAlign: 'center',
              }}>
              ₦ 24,000
            </AppText>
          </View>
          <View style={{}}>
            <Chart />
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <AppText style={styles.sectionTitle}>Payment Summary</AppText>
            <Pressable>
              <AppText style={styles.seeAlltext}>See All</AppText>
            </Pressable>
          </View>
          <View style={styles.contactsContainer}>
            <SectionList
              scrollEnabled={false}
              sections={sections}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    alignItems: 'center',
                    paddingVertical: 10,
                  }}>
                  <View
                    style={{
                      backgroundColor:
                        item.status === 'received' ? '#039855' : colors.RED_01,
                      width: 60,
                      aspectRatio: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 100,
                    }}>
                    <Icon
                      name="credit-card"
                      weight="bold"
                      color={colors.WHITE}
                      size={28}
                    />
                  </View>

                  <View
                    style={{
                      flex: 1,
                    }}>
                    <AppText
                      style={{
                        textTransform: 'capitalize',
                        fontWeight: '600',
                        fontSize: px(20),
                      }}>
                      Direct {item.type}
                    </AppText>
                    <AppText
                      style={{
                        textTransform: 'capitalize',
                      }}>
                      {item.status}
                    </AppText>
                  </View>
                  <AppText
                    style={{
                      fontWeight: '700',
                      fontSize: px(22),
                    }}>
                    {item.type === 'credit' ? '+ ' : '- '}
                    {item.amount}
                  </AppText>
                </View>
              )}
              renderSectionHeader={({section: {title}}) => (
                <View
                  style={{
                    paddingVertical: 15,
                  }}>
                  <AppText style={{}}>{title}</AppText>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Insights;
