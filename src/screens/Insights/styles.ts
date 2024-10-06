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
  tabs: {
    gap: 20,
    flexDirection: 'row',
  },
  tab: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'transparent',
    paddingHorizontal: 12,
  },
  tabText: {
    fontWeight: '600',
    fontSize: px(16),
    color: 'white',
  },
  screenHeaderTitle: {
    fontSize: px(24),
    fontWeight: '500',
  },
  section: {
    gap: 10,
    paddingVertical: 10,
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
  searchContainer: {
    gap: 10,
  },
  featuresContainer: {
    gap: 10,
    rowGap: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  feature: {
    gap: 10,
    alignItems: 'center',
    flex: 1,
  },
  featureText: {
    textAlign: 'center',
  },
  contactsContainer: {
    gap: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contact: {
    flex: 1,
    gap: 10,
    alignItems: 'center',
  },
  contactAvatar: {
    width: 70,
    height: 70,
    overflow: 'hidden',
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    padding: 10,
  },
  contactAvatarImage: {
    width: '100%',
    aspectRatio: 1,
    position: 'absolute',
    resizeMode: 'contain',
    zIndex: 9,
    backgroundColor: colors.WHITE,
  },
  featureImage: {
    backgroundColor: colors.GREY_05,
    borderRadius: 10,
    width: 50,
    aspectRatio: 1,
  },
  seeAlltext: {
    fontSize: px(16),
    color: colors.ORANGE_01,
    fontWeight: '500',
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
});
