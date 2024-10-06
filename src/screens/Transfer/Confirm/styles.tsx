import {WIDTH} from '@constants/screen';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.GREY_02,
    gap: 20,
  },
  header: {
    //lineHeight: px(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontWeight: '600',
  },
  right: {
    width: WIDTH * 0.1,
  },

  writeUp: {
    color: colors.BLACK_01,
    fontSize: px(16),
  },
});
