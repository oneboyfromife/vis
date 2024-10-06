import {HEIGHT, WIDTH} from '@constants/screen';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999999,
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: colors.TRANSPARENT,
  },
  sheet: {
    paddingHorizontal: 20,
    gap: 20,
  },
  closeButton: {
    padding: 8,
    backgroundColor: colors.GREY_02,
    borderRadius: 100,
  },
  sheetHeaderTitle: {
    fontWeight: '600',
    textAlign: 'center',
  },
  sheetHeader: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  optionsList: {
    gap: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.GREY_02,
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 50,
    paddingBottom: 30,
    justifyContent: 'space-between',
    gap: 20,
    flexDirection: 'row',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingVertical: 5,
  },
  optionTitle: {
    fontWeight: '600',
  },
  optionIcon: {
    backgroundColor: colors.ORANGE_01,
    padding: 10,
    borderRadius: 50,
  },
});
