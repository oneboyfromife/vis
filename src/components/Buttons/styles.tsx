import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 20,
    width: '100%',
  },
  title: {
    fontWeight: '500',
    fontSize: px(18),
  },
  buttonPrimary: {
    backgroundColor: colors.BLUE_01,
  },
  titlePrimary: {
    color: colors.WHITE,
  },
  buttonSecondary: {
    borderColor: colors.BLUE_01,
    borderWidth: 1.5,
  },
  titleSecondary: {},
});
