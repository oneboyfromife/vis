import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import colors from '@theme/colors';
import {Icon} from '@components/Icon';
import {TProgressData} from 'types/index';

export type TProfileProgress = {
  activeIndex: number;
  data: TProgressData[];
};

const ProfileProgress = ({data, activeIndex}: TProfileProgress) => {
  return (
    <View style={styles.container}>
      {data.map(({key, iconName}, index) => (
        <View key={key} style={styles.progress}>
          {index > 0 && (
            <View
              style={{
                ...styles.line,
                backgroundColor:
                  index <= activeIndex ? colors.ORANGE_01 : colors.GREY_06,
              }}
            />
          )}
          <View
            style={{
              ...styles.card,
              backgroundColor:
                index <= activeIndex ? colors.ORANGE_01 : colors.GREY_06,
            }}>
            <Icon
              color={index <= activeIndex ? 'white' : undefined}
              weight={index <= activeIndex ? 'bold' : undefined}
              name={iconName}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default ProfileProgress;
