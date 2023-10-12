import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 150px;
    height: 260px;
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 16px;
`

export const ProductImage = styled.Image`
    width: 148px;
    height: 184px;
`

export const ProductDetails = styled.View`
    width: 150px;
    height: 63px;
    margin-top: 8px;
`

export const ProductName = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    color: ${({ theme }) => theme.COLORS.GRAY_500};
    margin-bottom: 4px;
`

export const ProductDescription = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.XXS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: ${({ theme }) => theme.COLORS.BLACK_900};
    margin-bottom: 6px;
`

export const ProductPrice = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD};
    color: ${({ theme }) => theme.COLORS.RED_500}
`