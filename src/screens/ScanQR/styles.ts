import {HEIGHT, WIDTH} from '@constants/screen';
import {px} from '@helpers/responsiveness';
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
  },
  flexContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
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
    paddingVertical: 20,
  },
  optionsList: {
    gap: 25,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.GREY_02,
  },
  semiContainer: {
    justifyContent: 'space-between',
    gap: 18,
    flex: 1,
    zIndex: 999,
  },
  scanner: {
    backgroundColor: 'black',
    width: '100%',
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTextContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: colors.BLUE_03 + '40',
    padding: 5,
    borderRadius: 20,
    paddingHorizontal: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.BLUE_03,
  },
  bottomText: {
    fontSize: px(14),
    color: colors.BLUE_03,
    fontWeight: '600',
  },
});
