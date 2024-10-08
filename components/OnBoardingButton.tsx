import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Animated, {
  AnimatedRef,
  SharedValue,
  interpolateColor,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { OnboardingData } from "../data/onboardingData";
import { StackNavigationProp } from "@react-navigation/stack";

type Props = {
  dataLength: number;
  flatListIndex: SharedValue<number>;
  flatListRef: AnimatedRef<FlatList<OnboardingData>>;
  x: SharedValue<number>;
};

const OnBoardingButton = ({
  flatListRef,
  flatListIndex,
  dataLength,
  x,
}: Props) => {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const navigation = useNavigation();

  const animatedBackgroundColor = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      x.value,
      [0, SCREEN_WIDTH, 2 * SCREEN_WIDTH, 3 * SCREEN_WIDTH, 4 * SCREEN_WIDTH],
      ["transparent", "transparent", "transparent", "transparent", "#D17842"]
    );

    return {
      backgroundColor: backgroundColor,
    };
  });

  const containerAnimationStyle = useAnimatedStyle(() => {
    return {
      width:
        flatListIndex.value === dataLength - 1
          ? withTiming(120)
          : withTiming(60),

      height:
        flatListIndex.value === dataLength - 1
          ? withTiming(40)
          : withTiming(40),
    };
  });
  const nextAnimationStyle = useAnimatedStyle(() => {
    return {
      width: 60,
      height: 30,
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(0) : withTiming(1),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(180)
              : withTiming(0),
        },
      ],
    };
  });

  const getStartedTextAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity:
        flatListIndex.value === dataLength - 1 ? withTiming(1) : withTiming(0),
      transform: [
        {
          translateX:
            flatListIndex.value === dataLength - 1
              ? withTiming(0)
              : withTiming(-100),
        },
      ],
    };
  });

  return (
    <TouchableOpacity
      onPress={() => {
        if (flatListIndex.value < dataLength - 1) {
          flatListRef.current?.scrollToIndex({
            index: flatListIndex.value + 1,
          });
        } else {
          navigation.navigate("auth" as never);
        }
      }}
      activeOpacity={0.7}
    >
      <Animated.View
        style={[
          styles.container,
          animatedBackgroundColor,
          containerAnimationStyle,
        ]}
      >
        <Animated.Text
          style={[styles.getStartedText, getStartedTextAnimationStyle]}
        >
          Get Started
        </Animated.Text>

        <Animated.Text style={[styles.nextText, nextAnimationStyle]}>
          Next
        </Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default OnBoardingButton;

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 30,
    padding: 6,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  nextText: {
    fontSize: 20,
    alignContent: "center",
    justifyContent: "center",
    textAlign: "right",
    color: "white",
  },
  getStartedText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    flex: 1,
    position: "absolute",
    textAlign: "center",
  },
});
