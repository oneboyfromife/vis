import {WIDTH} from '@constants/screen';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.GREY_02,
    gap: 18,
  },
  semiContainer: {
    paddingHorizontal: 20,
    gap: 18,
  },
  indicatorContainer: {
    flexDirection: 'row',
    gap: 10,
    backgroundColor: colors.GREY_03,
    alignSelf: 'center',
    borderRadius: 5,
    width: 64,
    padding: 3,
  },
  indicator: {
    width: 30,
    height: 6,
    borderRadius: 2,
    backgroundColor: colors.BLUE_01,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  headerYouButton: {
    width: 44,
    height: 44,
    overflow: 'hidden',
    borderRadius: 80,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: '100%',
    aspectRatio: 1,
    position: 'absolute',
    zIndex: 9,
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
  balanceContainer: {
    gap: 8,
  },
  balanceCardContainer: {
    gap: 10,
    paddingHorizontal: 20,
  },
  seeAlltext: {
    fontSize: px(16),
    color: colors.ORANGE_01,
    fontWeight: '500',
  },
  balanceCard: {
    backgroundColor: colors.WHITE,
    gap: 20,
    width: WIDTH - 40,
    padding: 18,
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
  balanceTitle: {
    fontSize: px(16),
    fontWeight: '600',
    opacity: 0.8,
  },
  balanceSubtitle: {
    fontSize: px(15),
    opacity: 0.8,
  },
  balanceImage: {
    aspectRatio: 1,
  },
  balance: {
    fontWeight: '600',
    fontSize: px(32),
    paddingVertical: 2,
  },
  section: {
    gap: 20,
  },
  sectionTitle: {
    fontSize: px(18),
    fontWeight: '600',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  serviceContainer: {
    gap: 10,
    paddingHorizontal: 20,
  },
  service: {
    gap: 10,
  },
  serviceImage: {
    backgroundColor: colors.GREY_01,
    borderRadius: 10,
    width: WIDTH * 0.5,
    aspectRatio: 16 / 14,
  },
});
