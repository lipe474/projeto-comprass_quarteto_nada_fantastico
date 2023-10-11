import styled from "styled-components/native";
import { Plus, Minus } from "phosphor-react-native";

export const Container = styled.View`
    flex-direction: row;
    width: 148px;
    height: 21px;
    justify-content: center;
    align-items: center;
`

export const ButtonMinus = styled.TouchableOpacity`
    width: 50.88px;
    height: 21px;
    border-top-left-radius: 12px;
    background-color: ${({ theme }) => theme.COLORS.RED_500};
    justify-content: center;
    align-items: center;
`

export const ButtonPlus = styled.TouchableOpacity`
    width: 50.88px;
    height: 21px;
    border-top-right-radius: 12px;
    background-color: ${({ theme }) => theme.COLORS.RED_500};
    justify-content: center;
    align-items: center;
`

export const CountIndicator = styled.Text`
    width: 46.24px;
    height: 21px;
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.COLORS.BLACK_900};
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.BLACK_900};
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
    text-align: center;
    justify-content: center;
    padding-top: 2px;
`

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
    size: theme.FONT_SIZE.LG,
    color: theme.COLORS.WHITE,
    weight: "bold"
}))`

`

export const MinusIcon = styled(Minus).attrs(({ theme }) => ({
    size: theme.FONT_SIZE.LG,
    color: theme.COLORS.WHITE,
    weight: "bold"
}))`

`