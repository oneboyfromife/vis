import React, {forwardRef} from 'react';
import {RefreshControl, View, ViewStyle} from 'react-native';
import {
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps,
} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import AppLoader from '@components/AppLoader';

export interface AppScreenProps {
  onRefresh?: () => void;
  refreshing?: boolean;
  containerStyle?: ViewStyle;
  loading?: boolean;
  header?: React.ReactNode;
}

const AppScreen = forwardRef<
  KeyboardAwareScrollView,
  KeyboardAwareScrollViewProps & AppScreenProps
>(
  (
    {
      children,
      onRefresh,
      style,
      containerStyle,
      loading,
      refreshing,
      header,
      ...props
    },
    ref,
  ) => {
    return (
      <View style={[styles.container, containerStyle]}>
        <AppLoader loading={loading} />
        {header}
        <KeyboardAwareScrollView
          style={[style, styles.scrollContainerStyle]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          refreshControl={
            onRefresh ? (
              <RefreshControl
                refreshing={refreshing || false}
                onRefresh={onRefresh}
              />
            ) : undefined
          }
          ref={ref}
          {...props}>
          {children}
        </KeyboardAwareScrollView>
      </View>
    );
  },
);

export default AppScreen;
