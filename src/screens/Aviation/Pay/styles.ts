import {HEIGHT, WIDTH} from '@constants/screen';
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
    minHeight: HEIGHT - 42 * 5,
  },
  inputs: {
    gap: 15,
    flex: 1,
  },
  writeUp: {
    color: colors.BLACK_01,
  },
  errorText: {
    color: colors.RED_01,
  },
  terms: {
    fontSize: px(17),
  },
  termsContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  orangeText: {
    color: colors.ORANGE_01,
    fontWeight: '500',
    fontSize: px(17),
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
  modelContainer: {
    backgroundColor: colors.GREY_02,
    flex: 1,
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
  successContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 999,
    height: HEIGHT,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: colors.GREY_02,
    gap: 20,
    flex: 1,
    width: WIDTH,
  },
  successContent: {
    flex: 1,
    justifyContent: 'center',
    gap: 40,
    alignItems: 'center',
  },
  successText: {
    fontSize: px(32),
    fontWeight: '600',
    textAlign: 'center',
  },
  successWriteUp: {
    textAlign: 'center',
  },
  successOptions: {
    flexDirection: 'row',
    gap: 18,
  },
  successOption: {
    flex: 1,
  },
  confirmText: {
    textAlign: 'center',
    fontSize: px(16),
  },
  confirmTextBold: {
    fontWeight: '700',
  },
  confirmContainer: {
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});
