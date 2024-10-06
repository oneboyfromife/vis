import React from 'react';
import {Pressable} from 'react-native';
import colors from '@theme/colors';
import {Icon} from '@components/Icon';

export interface IRadioButton {
  selected?: boolean;
}

const RadioButton = ({selected, ...props}: IRadioButton) => {
  return (
    <Pressable {...props}>
      {selected ? (
        <Icon
          name="check-circle"
          weight="fill"
          color={colors.ORANGE_02}
          size={28}
        />
      ) : (
        <Icon name="circle" color={colors.GREY_01} size={28} />
      )}
    </Pressable>
  );
};

export default RadioButton;
