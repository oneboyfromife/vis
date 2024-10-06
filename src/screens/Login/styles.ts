import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.GREY_02,
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  formContainer: {
    gap: 20,
    flex: 1,
    paddingBottom: 20,
  },
  errorText: {
    color: colors.RED_01,
  },
  orangeText: {
    color: colors.ORANGE_01,
  },
  signInWriteUp: {
    textAlign: 'center',
    fontSize: px(17),
    alignItems: 'center',
  },
  signInWriteUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
