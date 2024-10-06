import {WIDTH} from '@constants/screen';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.GREY_02,
    gap: 20,
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontWeight: '600',
  },
  right: {
    width: WIDTH * 0.1,
  },
  formContainer: {
    gap: 20,
  },
  inputs: {
    gap: 20,
  },
  writeUp: {
    color: colors.BLACK_01,
  },
  errorText: {
    color: colors.RED_01,
  },
  card: {
    backgroundColor: colors.WHITE,
    padding: 18,
    flexDirection: 'row',
    gap: 18,
    alignItems: 'center',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 1,
      },
      android: {
        elevation: 1, // Elevation property for Android
      },
    }),
  },
  cardContent: {
    flex: 1,
    gap: 5,
  },
  cardIcon: {
    padding: 10,
    backgroundColor: colors.GREY_02,
    borderRadius: 50,
  },
  subTitle: {
    fontSize: px(16),
    opacity: 0.8,
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
