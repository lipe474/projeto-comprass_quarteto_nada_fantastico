import styled from "styled-components/native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
    flex: 1;
    width: ${windowWidth}px;
`

export const ProductImage = styled.Image`
    width: ${windowWidth}px;
    height: 413px;
`

export const ProductInformationsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: ${windowWidth}px;
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 64px;
`

export const NameAndCategoryContainer = styled.View`
    align-items: baseline;
`

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.BLACK_900};
`

export const Category = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    margin-top: 4px;
`

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.BLACK_900};
`

export const DescriptionContainer = styled.View`
    width: ${windowWidth}px;
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 40px;
`

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.BLACK_900};
`