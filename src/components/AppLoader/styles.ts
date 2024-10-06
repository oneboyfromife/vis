import {HEIGHT, WIDTH} from '@constants/screen';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999999,
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: colors.WHITE_01,
  },
});
