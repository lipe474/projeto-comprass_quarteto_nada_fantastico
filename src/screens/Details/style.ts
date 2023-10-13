import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`

export const ContainerCategoryProducts = styled.View`
    margin-top: 40px;
    height: 297px;
    padding-left: 16px;
`

export const TitleAndNumberItemsContainer = styled.View`
    flex-direction: row;
    height: 22px;
    padding-left: 16px;
    padding-right: 16px;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.XMD}px;
    color: ${({ theme }) => theme.COLORS.BLACK_900};
`

export const ItemsNumber = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
`