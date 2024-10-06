import {WIDTH} from '@constants/screen';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import fonts from '@theme/fonts';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    borderColor: colors.GREY_01,
    paddingVertical: 20,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: WIDTH * 0.03,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  container: {},
  input: {
    padding: 0,
    flex: 1,
    textAlignVertical: 'center',
    color: colors.BLACK,
    fontSize: px(18),
    fontFamily: fonts.REGULAR,
    borderLeftColor: colors.GREY_04,
    borderLeftWidth: 1,
    paddingLeft: 12,
  },
  error: {
    fontSize: px(15),
    color: colors.RED_01,
    paddingVertical: 2,
  },
  country: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  countryCode: {
    color: colors.GREY_04,
  },
  countryLogo: {
    width: 24,
    borderRadius: 10,
    aspectRatio: 1,
  },
});
