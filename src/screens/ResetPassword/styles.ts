import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.GREY_02,
  },
  writeUp: {
    color: colors.GREY_04,
    textAlign: 'center',
  },
  errorText: {
    color: colors.RED_01,
  },
  writeUpHeading: {
    textAlign: 'center',
    fontSize: px(28),
    fontWeight: '600',
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingBottom: 30,
    gap: 20,
  },
  formContainer: {
    gap: 20,
    flex: 1,
  },
  terms: {
    textAlign: 'center',
    fontSize: px(17),
  },
  orangeText: {
    color: colors.ORANGE_01,
    fontWeight: '500',
    fontSize: px(17),
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
