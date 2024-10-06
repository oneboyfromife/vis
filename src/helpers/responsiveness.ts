import {PixelRatio} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';
import {Dimensions, Platform, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('window');

export const widthPercentageToDP = (widthPercent: string | number) => {
  const screenWidth = width;
  // Convert string input to decimal number
  const elemWidth =
    typeof widthPercent === 'string' ? parseFloat(widthPercent) : widthPercent;
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};

export const heightPercentageToDP = (heightPercent: string | number) => {
  const screenHeight = height;
  // Convert string input to decimal number
  const elemHeight =
    typeof heightPercent === 'string'
      ? parseFloat(heightPercent)
      : heightPercent;
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export const RFPercentage = (percent: number): number => {
  const standardLength = width > height ? width : height;
  const offset =
    width > height ? 0 : Platform.OS === 'ios' ? 78 : StatusBar.currentHeight; // iPhone X style SafeAreaView size in portrait

  const deviceHeight =
    isIphoneX() || Platform.OS === 'android'
      ? standardLength - (offset || 0)
      : standardLength;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
};

export const px = (size: number) => {
  const scale = PixelRatio.getFontScale();

  return size * scale;
};
