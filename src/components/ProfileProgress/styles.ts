import {WIDTH} from '@constants/screen';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  card: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.GREY_06,
    padding: 8,
  },

  line: {
    width: WIDTH * 0.25,
    height: 2,
    backgroundColor: colors.GREY_06,
  },
  progress: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
