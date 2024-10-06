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
    padding: 15,
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
  errorText: {
    color: colors.RED_01,
  },
  searchInput: {
    width: '100%',
  },
  modelContainer: {
    backgroundColor: colors.GREY_02,
    flex: 1,
    alignItems: 'stretch',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    paddingVertical: 20,
    alignItems: 'flex-start',
    gap: 10,
  },
  modalHeadingWriteContainer: {
    flex: 1,
    gap: 2,
  },
  modalWriteUpHeading: {
    fontWeight: '600',
    fontSize: px(20),
  },
  modalWriteUp: {
    color: colors.GREY_04,
    fontSize: px(14),
    width: '80%',
  },

  closeButton: {
    padding: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 20,
  },
  modalContent: {
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  bankList: {
    width: '100%',
  },
  bankItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  bank: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  bankLogo: {
    width: 40,
    borderRadius: 10,
    aspectRatio: 1,
  },
});
