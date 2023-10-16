import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";


export const ButtonContainer = styled.TouchableOpacity<{ isOn: boolean }>`
  width: 150px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${(props) => (props.isOn ? 'green' : 'red')};
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
`;

