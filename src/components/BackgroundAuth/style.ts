import styled from "styled-components/native";

export const ImageBackground = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  z-index: -1;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.BLACK_800};
`;
