import {
  BottomTabNavigationProp,
  createBottomTabNavigator
} from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/icons/home.svg";
import ShopSvg from "@assets/icons/cart-shop.svg";
import ProfileSvg from "@assets/icons/profile.svg";

import { useTheme } from "styled-components/native";
import { Cart } from "@screens/Cart";
import { Home } from "@screens/Home";
import { Details } from "@screens/Details";
import { useCartStore } from "../contexts/CartStore";
import { useState, useEffect } from "react";
import { StackRoutes } from "./stack.routes";
import { Profile } from "@screens/Profile";
import { useTranslation } from 'react-i18next'

type BottomTabRoutes = {
  home: undefined;
  cart: undefined;
  profile: undefined;
  details: {
    id: number;
    title: string;
    price: number;
    description: string;
    images: any;
    category: any;
  };
  stackRoutes: undefined;
};

export type TabProps = BottomTabNavigationProp<BottomTabRoutes>;

const Tab = createBottomTabNavigator<BottomTabRoutes>();

export function TabRoutes() {
  const { t, i18n } = useTranslation();
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();
  const cartStore = useCartStore();
  const [totalNumberOfItems, setTotalNumberOfItems] = useState<string>("0");

  useEffect(() => {
    const calculatedTotal = cartStore.cart.reduce(
      (acc, product) => acc + product.count,
      0
    );
    const itemsNumber = calculatedTotal.toString();
    setTotalNumberOfItems(itemsNumber);
  }, [cartStore.cart]);

  const iconSize = 30;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.RED_500,
        tabBarInactiveTintColor: COLORS.GRAY_TAB_BAR,
        tabBarStyle: {
          backgroundColor: COLORS.WHITE,
          height: 75,
          paddingTop: 24,
          paddingBottom: 5,
          position: "relative"
        },
        tabBarLabelStyle: {
          fontFamily: FONT_FAMILY.REGULAR,
          fontSize: FONT_SIZE.XXS,
          lineHeight: 30,
          marginTop: 8,
          textTransform: "capitalize"
        }
      }}
    >
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: t("Home"),
          tabBarIcon: ({ color, focused }) => (
            <HomeSvg
              color={color}
              fill={focused ? COLORS.RED_500 : COLORS.WHITE}
              width={iconSize}
              height={iconSize}
            />
          )
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarLabel: t("Cart"),
          tabBarBadge:
            totalNumberOfItems === "0" ? undefined : totalNumberOfItems,
          tabBarBadgeStyle: {
            start: 5,
            top: -20,
            width: 10,
            height: 18,
            fontSize: 8
          },
          tabBarIcon: ({ color, focused }) => (
            <ShopSvg
              color={color}
              fill={focused ? COLORS.RED_500 : COLORS.WHITE}
              width={iconSize}
              height={iconSize}
            />
          )
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarLabel: t("Profile"),
          tabBarIcon: ({ color, focused }) => (
            <ProfileSvg
              color={color}
              fill={focused ? COLORS.RED_500 : COLORS.WHITE}
              width={iconSize}
              height={iconSize}
            />
          )
        }}
      />

      <Tab.Screen
        name="details"
        component={Details}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null
        }}
      />

      <Tab.Screen
        name="stackRoutes"
        component={StackRoutes}
        options={{
          tabBarStyle: { display: "none" },
          tabBarButton: () => null
        }}
      />
    </Tab.Navigator>
  );
}
