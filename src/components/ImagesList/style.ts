import styled from "styled-components/native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
    width: ${windowWidth}px;
    height: 413px;
`

export const ProductImage = styled.Image`
    width: ${windowWidth}px;
    height: 413px;
`