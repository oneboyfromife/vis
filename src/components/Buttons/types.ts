import {ViewStyle} from 'react-native';
import {TouchableOpacityProps} from 'react-native-gesture-handler';

export interface IAppButton extends Partial<TouchableOpacityProps> {
  title: string;
  titleStyle?: ViewStyle;
  style?: ViewStyle;
}
