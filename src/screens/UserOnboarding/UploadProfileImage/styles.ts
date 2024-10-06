import {HEIGHT, WIDTH} from '@constants/screen';
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
    paddingBottom: 30,
  },
  imageContainer: {
    borderRadius: WIDTH,
    borderColor: colors.GREY_04,
    backgroundColor: colors.GREY_06,
    borderStyle: 'dashed',
    borderWidth: 2,
    alignSelf: 'center',
    width: WIDTH * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1,
    overflow: 'hidden',
    padding: 2,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: WIDTH,
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
});
