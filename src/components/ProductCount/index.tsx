import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Container, ButtonMinus, ButtonPlus, PlusIcon, MinusIcon, CountIndicator } from './style';

export function ProductCount() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if(count > 0){
        setCount(prevCount => prevCount - 1);
    }
  };

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <Container>
      <ButtonMinus onPress={decrement}>
        <MinusIcon></MinusIcon>
      </ButtonMinus>
      <CountIndicator>{count}</CountIndicator>
      <ButtonPlus onPress={increment}>
        <PlusIcon></PlusIcon>
      </ButtonPlus>
    </Container>
  );
};

