import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  width: 343px;
  height: 112px;
  justify-content: flex-end;
  gap: 16px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  position: absolute;
  bottom: 0;
`;
