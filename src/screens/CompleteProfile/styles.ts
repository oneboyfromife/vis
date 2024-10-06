import {WIDTH} from '@constants/screen';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  webViewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.GREY_02,
  },
  rightHeaderItem: {
    width: WIDTH * 0.1,
  },
  writeUpHeading: {
    fontSize: px(28),
    fontWeight: '600',
  },
  writeUp: {
    color: colors.GREY_04,
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingBottom: 30,
    justifyContent: 'space-between',
    gap: 20,
    flexDirection: 'row',
  },
  errorText: {
    color: colors.RED_01,
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
  writeUpContainer: {
    gap: 4,
  },
});
