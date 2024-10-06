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
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingVertical: 15,
    backgroundColor: colors.BLUE_01,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: px(28),
    fontWeight: '500',
    color: colors.WHITE,
  },
  right: {
    width: WIDTH * 0.1,
  },
  formContainer: {
    gap: 20,
  },
  inputs: {
    gap: 20,
  },
  writeUp: {
    color: colors.BLACK_01,
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
  youButton: {
    width: 64,
    height: 64,
    overflow: 'hidden',
    borderRadius: 80,
    backgroundColor: colors.WHITE_01,
    borderWidth: 1,
    borderColor: colors.GREY_08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: '100%',
    aspectRatio: 1,
    position: 'absolute',
    zIndex: 9,
  },
  cameraIcon: {
    position: 'absolute',
    zIndex: 10,
    bottom: 0,
    backgroundColor: colors.GREY_04 + '99',
    padding: 3,
    borderRadius: 50,
  },
  profileContainer: {
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  profileName: {
    fontSize: px(24),
    fontWeight: '600',
  },
  settingsList: {
    paddingVertical: 20,
    gap: 15,
    paddingHorizontal: 20,
  },
  setting: {
    flexDirection: 'row',
    gap: 15,
    paddingVertical: 12,
    alignItems: 'center',
  },
  settingTitle: {
    fontSize: px(20),
  },
});
