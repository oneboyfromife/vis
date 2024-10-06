import React, {FC, useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import {Icon} from '@components/Icon';
import colors from '@theme/colors';

const CheckBox: FC<{
  value?: boolean;
  onChange?: (checked: boolean) => void;
}> = ({onChange, value = false}) => {
  const [checked, setChecked] = useState(value);

  useEffect(() => {
    onChange && onChange(checked);
  }, [onChange, checked]);

  return (
    <Pressable onPress={() => setChecked(prev => !prev)}>
      <Icon
        name={checked ? 'check-square' : 'square'}
        weight={checked ? 'fill' : 'regular'}
        color={checked ? colors.BLACK : colors.GREY_04}
        size={28}
      />
    </Pressable>
  );
};

export default CheckBox;
