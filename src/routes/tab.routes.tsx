import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeSvg from "@assets/icons/home.svg";
import ShopSvg from "@assets/icons/cart-shop.svg";
import ProfileSvg from "@assets/icons/profile.svg";

import { useTheme } from "styled-components/native";
import { Cart } from "@screens/Cart";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  const { COLORS, FONT_FAMILY, FONT_SIZE } = useTheme();

  const iconSize = 30;
  const showBadge = true;

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
        component={Cart}
        options={{
          tabBarLabel: "Home",
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
          tabBarLabel: "Cart",
          tabBarBadge: "10",
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
        component={Cart}
        options={{
          tabBarLabel: "Profile",
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
    </Tab.Navigator>
  );
}
