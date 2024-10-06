import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import fonts from '@theme/fonts';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  text: {
    fontSize: px(18),
    fontFamily: fonts.REGULAR,
    color: colors.BLUE_01,
  },
});
