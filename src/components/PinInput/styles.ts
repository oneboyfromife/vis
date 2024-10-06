import {HEIGHT, WIDTH} from '@constants/screen';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  input: {
    textAlignVertical: 'center',
    color: colors.BLUE_01,
    borderWidth: 1,
    borderColor: colors.GREY_01,
    width: WIDTH * 0.13,
    height: HEIGHT * 0.07,
    borderRadius: 10,
    backgroundColor: colors.WHITE,
    // marginBottom: heightPercentageToDP(2),
    textAlign: 'center',
    fontSize: px(50),
    padding: 0,
    flex: 1,
    aspectRatio: 1,
  },
});
