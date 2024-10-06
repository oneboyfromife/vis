import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
  },
  tabBarItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  tabBarItemText: {
    textAlign: 'center',
    fontSize: px(14),
  },
});
