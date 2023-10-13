import React, { ReactNode } from "react";
import { ImageBackgroundProps } from "react-native";
import { ImageBackground } from "./style";
import { KeyboardAvoidingView, Platform } from "react-native";

interface BackgroundAuthProps extends ImageBackgroundProps {
  children?: ReactNode;
}

export function BackgroundAuth({ ...props }: BackgroundAuthProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={false}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("@assets/images/background.png")}
        resizeMode="contain"
      />
    </KeyboardAvoidingView>
  );
}
