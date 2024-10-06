import {WIDTH} from '@constants/screen';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  webViewContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.GREY_02,
  },
  rightHeaderItem: {
    width: WIDTH * 0.1,
  },
  writeUpHeading: {
    fontSize: px(28),
    fontWeight: '600',
  },
  writeUp: {
    color: colors.GREY_04,
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingBottom: 30,
    justifyContent: 'space-between',
    gap: 20,
    flexDirection: 'row',
  },
  errorText: {
    color: colors.RED_01,
  },
  formContainer: {
    gap: 20,
    flex: 1,
  },
  terms: {
    textAlign: 'center',
    fontSize: px(17),
  },
  orangeText: {
    color: colors.ORANGE_01,
    fontWeight: '500',
    fontSize: px(17),
  },
  writeUpContainer: {
    gap: 4,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
