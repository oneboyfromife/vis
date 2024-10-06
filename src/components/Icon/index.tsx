import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import config from '@assets/icons/Phosphor.json';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

const VectorIcon = createIconSetFromIcoMoon(config, 'Phosphor', 'Phosphor.ttf');

type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
  weight?: IconWeight;
}

export const Icon: React.FC<IconProps> = props => {
  const {size = 20, color, name, weight, ...rest} = props;

  const resolvedName =
    weight === undefined
      ? name
      : weight === 'regular'
      ? name
      : `${name}-${weight}`;

  return <VectorIcon size={size} name={resolvedName} color={color} {...rest} />;
};

export const IconButton: React.FC<
  IconProps & TouchableOpacityProps
> = props => {
  const {size = 20, color, name, weight, style, ...rest} = props;

  const resolvedName =
    weight === undefined
      ? name
      : weight === 'regular'
      ? name
      : `${name}-${weight}`;

  return (
    <TouchableOpacity style={[style]} {...rest}>
      <VectorIcon size={size} name={resolvedName} color={color} />
    </TouchableOpacity>
  );
};
