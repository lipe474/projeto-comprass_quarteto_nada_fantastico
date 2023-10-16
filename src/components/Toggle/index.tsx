import React, { useState } from 'react';
import { Text, TouchableOpacityProps, Switch } from 'react-native';
import styled from 'styled-components/native';
import {ButtonContainer, ButtonText} from './style'

type Props = TouchableOpacityProps &{
    isOn:boolean
}
 export function ToggleButton({isOn }:Props) {
  const [on, setOn] = useState(false);
 
  const toggleSwitch = () => {
    setOn(!on);
  };

  return (
    <ButtonContainer onPress={toggleSwitch}>
      <Switch/>
    </ButtonContainer>
  );
};


