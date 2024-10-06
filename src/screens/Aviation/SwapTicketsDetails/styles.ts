import {WIDTH} from '@constants/screen';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingTop: 90,
    backgroundColor: colors.GREY_02,
    gap: 20,
  },
  headerContainer: {
    paddingBottom: 80,
    backgroundColor: colors.BLUE_01,
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    overflow: 'visible',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontWeight: '600',
    color: 'white',
  },
  right: {
    width: WIDTH * 0.1,
  },
  backButtonContainer: {
    width: 44,
    height: 44,
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  airlineImageContainer: {
    width: 140,
    borderRadius: 200,
    backgroundColor: 'white',
    padding: 10,
    position: 'absolute',
    top: 0,
    right: '50%',
    zIndex: 999,
    transform: [
      {
        translateY: -70,
      },
      {
        translateX: 70,
      },
    ],
  },
  airlineImage: {
    width: '100%',
    aspectRatio: 1,
  },
  title: {
    fontSize: px(28),
    fontWeight: '600',
  },
  price: {
    fontWeight: '600',
    fontSize: px(18),
  },
  changeButton: {
    color: colors.BLUE_02,
    fontWeight: '600',
  },
  details: {
    padding: 20,
    backgroundColor: 'white',
    gap: 15,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  section: {
    paddingHorizontal: 20,
  },
});
