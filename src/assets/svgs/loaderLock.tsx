import * as React from 'react';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Svg, {SvgProps, Path} from 'react-native-svg';

const LoaderLock = (props: SvgProps) => {
  const rotation = useSharedValue(0);

  // Define animated styles for the SVG
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotation.value}deg`}],
    };
  });

  // Start the rotation animation
  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {duration: 1000, easing: Easing.linear}),
      -1,
    );
  }, [rotation]);

  return (
    <>
      <Animated.View style={animatedStyle}>
        <Svg width={64} height={64} fill="none" {...props}>
          <Path
            stroke="#EAECF0"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={6}
            d="M32 3a29 29 0 1 1 0 58 29 29 0 0 1 0-58h0Z"
          />
          <Path
            stroke="#EA5C29"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={6}
            d="M32 3a29 29 0 0 1 28.498 34.37"
          />
        </Svg>
      </Animated.View>
      <Svg
        width={64}
        height={64}
        fill="none"
        style={{
          position: 'absolute',
        }}>
        <Path
          stroke="#98A2B3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M27 31v-4a5 5 0 1 1 10 0v4m-12 0h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H25a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
        />
      </Svg>
    </>
  );
};
export default LoaderLock;
