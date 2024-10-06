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
  errorText: {
    color: colors.RED_01,
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
  strengthContainer: {
    gap: 8,
    // marginTop: heightPercentageToDP(3),
    // marginBottom: heightPercentageToDP(5),
  },
  strength: {
    fontWeight: '500',
  },
  progressContainer: {
    backgroundColor: colors.WHITE,
    height: 10,
    borderRadius: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  validationContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingVertical: 5,
  },
  radio: {},
});
