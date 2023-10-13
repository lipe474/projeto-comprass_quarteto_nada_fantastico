import styled from "styled-components/native";
import { CaretRight, CaretDown } from "phosphor-react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
    flex: 1;
    width: ${windowWidth}px;
    margin-top: 62px;
`

export const TitleContainer = styled.TouchableOpacity`
    height: 58px;
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.COLORS.GRAY_100};
    padding-left: 16px;
    padding-right: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    color: ${({ theme }) => theme.COLORS.BLACK_900};
`

export const ArrowRightIcon = styled(CaretRight).attrs(({ theme }) => ({
    size: theme.FONT_SIZE.XS,
    color: theme.COLORS.BLACK_900,
    weight: "bold"
}))`

`

export const ArrowDownIcon = styled(CaretDown).attrs(({ theme }) => ({
    size: theme.FONT_SIZE.XS,
    color: theme.COLORS.BLACK_900,
    weight: "bold"
}))`

`

export const DescriptionContainer = styled.View`
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 12px;
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
    color: ${({ theme }) => theme.COLORS.BLACK_900};
    margin-top: -10px;
`