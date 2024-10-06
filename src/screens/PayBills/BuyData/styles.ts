import {WIDTH} from '@constants/screen';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.GREY_02,
    gap: 20,
  },
  header: {
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
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: px(16),
    opacity: 0.8,
  },
  selectInput: {
    flexDirection: 'row',
    gap: 20,
    borderWidth: 2,
    borderColor: colors.GREY_01,
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: WIDTH * 0.03,
    backgroundColor: colors.WHITE,
  },
  selectPlaceholder: {
    color: colors.GREY_04,
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  selectLogoContainer: {
    width: 30,
    aspectRatio: 1,
  },
  selectLogo: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});
