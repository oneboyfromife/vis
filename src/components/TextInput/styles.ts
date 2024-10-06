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
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: WIDTH * 0.03,
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
  },
  error: {
    fontSize: px(15),
    color: colors.RED_01,
    paddingVertical: 2,
  },
});
