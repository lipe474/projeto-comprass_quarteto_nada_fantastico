import React, { ReactNode } from "react";
import { ImageBackgroundProps } from "react-native";
import { ImageBackground } from "./style";

interface BackgroundAuthProps extends ImageBackgroundProps {
  children?: ReactNode;
}

export function BackgroundAuth({ children, ...props }: BackgroundAuthProps) {
  return (
    <ImageBackground resizeMode="contain" {...props}>
      {children}
    </ImageBackground>
  );
}
