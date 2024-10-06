import {HEIGHT, WIDTH} from '@constants/screen';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  webViewContainer: {
    flex: 1,
    height: HEIGHT * 0.4,
  },
  modalContainer: {
    backgroundColor: colors.GREY_02,
    flex: 1,
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
