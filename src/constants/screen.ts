import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {Dimensions} from 'react-native';

export const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;
