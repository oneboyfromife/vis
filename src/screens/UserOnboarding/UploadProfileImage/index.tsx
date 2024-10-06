import AppScreen from '@components/AppScreen';
import React, {useCallback, useState} from 'react';
import styles from './styles';
import {Image, Platform, TouchableOpacity, View} from 'react-native';
import BackButton from '@components/BackButton';
import AppLogo from '@assets/svgs/visaroLogo';
import {personalProfileData} from '@constants/content';
import AppText from '@components/AppText';
import ProfileProgress from '@components/ProfileProgress';
import {Asset} from 'react-native-image-picker';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ButtonPrimary from '@components/Buttons/buttonPrimary';
import {Icon} from '@components/Icon';
import * as ImagePicker from 'react-native-image-picker';
import SuccessCheck from '@assets/svgs/successCheck';
import {navigate} from '@helpers/navigation';
import NAVIGATION_ROUTES from '@navigation/routes.navigation';
import useUploadProfileImageImage from '@hooks/useUploadProfileImage';

export default () => {
  const [completed, setCompleted] = useState(false);
  const {top, bottom} = useSafeAreaInsets();

  const [profileImg, setProfileImg] = useState<Asset | null>(null);

  const {
    updateProfileImage,
    updatingProfileImage,
    isProfileImageUpdateError,
    profileImageUpdateError,
  } = useUploadProfileImageImage();

  const handleSubmit = useCallback(() => {
    if (profileImg) {
      updateProfileImage(
        {
          photo: {
            type: profileImg.type,
            name: profileImg.fileName,
            uri:
              Platform.OS === 'ios'
                ? profileImg.uri?.replace('file://', '')
                : profileImg.uri,
          },
        },
        {
          onSuccess() {
            setCompleted(true);
          },
          onError(error) {
            console.log('Error', error);
          },
        },
      );
    }
  }, [updateProfileImage, setCompleted, profileImg]);

  const selectImage = useCallback(() => {
    ImagePicker.launchImageLibrary(
      {
        mediaType: 'photo',
        selectionLimit: 1,
        presentationStyle: 'popover',
        includeBase64: true,
      },
      response => {
        if (response.assets) {
          setProfileImg(response.assets[0]);
        }
      },
    );
  }, []);

  return (
    <>
      {completed && (
        <View
          style={[
            styles.successContainer,
            {
              paddingBottom: bottom,
              paddingTop: top,
            },
          ]}>
          <View style={styles.successContent}>
            <SuccessCheck
              style={{
                transform: [
                  {
                    scale: 1.5,
                  },
                ],
              }}
            />
            <AppText style={styles.successText}>
              Congratulation! Continue With Visaro. You’re all set!
            </AppText>
          </View>
          <ButtonPrimary
            onPress={() => navigate(NAVIGATION_ROUTES.APP)}
            title="Continue"
          />
        </View>
      )}
      <AppScreen
        loading={updatingProfileImage}
        contentContainerStyle={[
          styles.container,
          {
            paddingTop: top,
            paddingBottom: bottom,
          },
        ]}>
        <View style={styles.logoContainer}>
          <BackButton />
          <AppLogo />
          <View style={styles.rightHeaderItem} />
        </View>
        <ProfileProgress data={personalProfileData} activeIndex={2} />
        <View style={styles.writeUpContainer}>
          <AppText style={styles.writeUpHeading}>Upload Profile Image</AppText>
          <AppText style={styles.writeUp}>
            Upload a clear picture of your face.
          </AppText>
        </View>
        <View style={styles.formContainer}>
          <TouchableOpacity onPress={selectImage} style={styles.imageContainer}>
            {profileImg ? (
              <Image source={{uri: profileImg.uri}} style={styles.image} />
            ) : (
              <Icon name="image" size={40} />
            )}
          </TouchableOpacity>
          {isProfileImageUpdateError && (
            <AppText style={styles.errorText}>
              {profileImageUpdateError?.message}
            </AppText>
          )}
          <View />
          <ButtonPrimary
            disabled={!profileImg}
            title="Confirm"
            onPress={() => handleSubmit()}
          />
        </View>
      </AppScreen>
    </>
  );
};
