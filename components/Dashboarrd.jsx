import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Ionicons from "react-native-vector-icons/Ionicons";
import { bg, buttonColor, grey } from "./Login";
import Progress from "./Progress";
import New from "./New";
const Tab = createBottomTabNavigator();

export default Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
            backgroundColor: bg,
            height: 55,
            borderTopWidth: 0
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize
          if (route.name === "Home") {
            iconName = focused
              ? "home-sharp"
              : "home-outline";
          } else if (route.name === 'Progress'){
            iconName = focused ? "keypad-sharp":
            "keypad-outline"
          } else if (route.name === 'New'){
            iconName = focused ? "add-circle" : "add-outline"
            iconSize = 32
          }
          return <Ionicons name={iconName} size={iconSize || size} color={color} />;
        },
        tabBarActiveTintColor: buttonColor,
        tabBarInactiveTintColor: grey,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
        <Tab.Screen
          name="New"
          component={New}
          options={{ headerShown: false }}
        />
      <Tab.Screen
        name="Progress"
        component={Progress}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
