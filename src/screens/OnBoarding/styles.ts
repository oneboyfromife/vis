import {HEIGHT} from '@constants/screen';
import {px} from '@helpers/responsiveness';
import colors from '@theme/colors';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREY_02,
  },
  imagesContainer: {
    height: HEIGHT * 0.7,
    flexGrow: 0,
  },
  onboardingImage: {
    height: HEIGHT * 0.7,
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.GREY_01,
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 20,
    flex: 1,
    padding: 20,
    paddingTop: 25,
  },
  text: {
    textAlign: 'center',
    fontSize: px(36),
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 15,
  },
  button: {
    flex: 1,
  },
});
