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
  sheetHeader: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  header: {
    fontWeight: '500',
    fontSize: px(28),
    //lineHeight: px(3),
  },
  writeUp: {
    color: colors.BLACK_01,
  },
  titleContainer: {
    flexDirection: 'column',
    flex: 1,
    gap: 4,
  },
  actionContainer: {},
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: colors.GREY_03,
    borderBottomWidth: 0.6,
    paddingVertical: 20,
    gap: 15,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.GREY_05,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: px(20),
  },
  subtitle: {
    color: colors.GREY_04,
    fontSize: px(16),
  },
  validationContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingVertical: 5,
  },
});
