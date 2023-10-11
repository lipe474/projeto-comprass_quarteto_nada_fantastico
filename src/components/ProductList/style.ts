import styled from "styled-components/native";

export const Container = styled.View`
    width: 343px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const CategoryTitle = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.EXTRA_BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
    color: ${({ theme }) => theme.COLORS.BLACK_900}
`

export const ViewAll = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    color: ${({ theme }) => theme.COLORS.BLACK_900}
`