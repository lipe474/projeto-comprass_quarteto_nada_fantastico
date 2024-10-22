import styled from "styled-components/native";

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BLACK_800};
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;
