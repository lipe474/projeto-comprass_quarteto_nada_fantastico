import { ReactElement, ReactNode } from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { RenderOptions, render } from "@testing-library/react-native";
import MockTheme from "../mocks/mockTheme";
import MockNavigationContainer from "../mocks/mockNavigationContainer";

function Providers({ children }: { children: ReactNode }) {
  return (
    <MockTheme>
      <MockNavigationContainer>{children}</MockNavigationContainer>
    </MockTheme>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: Providers, ...options });

export * from "@testing-library/react-native";
export { customRender as render, Providers };
