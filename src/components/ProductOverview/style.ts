import styled from "styled-components/native";
import {Dimensions} from 'react-native';
import { Plus, Minus } from "phosphor-react-native";

const windowWidth = Dimensions.get('window').width;

export const Container = styled.View`
    position: relative;
    flex: 1;
    width: ${windowWidth}px;
    margin-bottom: 62px;
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
    justify-content: space-between;
`

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
    color: ${({ theme }) => theme.COLORS.BLACK_900};
    height: 29px;
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
    margin-bottom: 62px;
`

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
    color: ${({ theme }) => theme.COLORS.BLACK_900};
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

export const ContainerCount = styled.View`
    position: absolute;
    bottom: 0;
    flex-direction: row;
    width: ${windowWidth}px;
    padding-top: 28px;
    padding-bottom: 28px;
    padding-left: 36px;
    padding-right: 36px;
    height: 112px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const ButtonMinus = styled.TouchableOpacity`
  width: ${windowWidth * 0.28}px;
  height: 43px;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
  justify-content: center;
  align-items: center;
`;

export const ButtonPlus = styled.TouchableOpacity`
  width: ${windowWidth * 0.28}px;
  height: 43px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.RED_500};
  justify-content: center;
  align-items: center;
`;

export const CountIndicator = styled.Text`
  width: ${windowWidth * 0.27}px;
  height: 43px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMI_BOLD};
  text-align: center;
  justify-content: center;
  padding-top: 3px;
`;

export const PlusIcon = styled(Plus).attrs(({ theme }) => ({
    size: theme.FONT_SIZE.LG,
    color: theme.COLORS.WHITE,
    weight: "bold"
  }))``;

export const MinusIcon = styled(Minus).attrs(({ theme }) => ({
    size: theme.FONT_SIZE.LG,
    color: theme.COLORS.WHITE,
    weight: "bold"
  }))``;