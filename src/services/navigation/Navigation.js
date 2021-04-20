import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import MapPage from "../../features/restaurants/screens/MapPage";
import SettingsPage from "../../features/restaurants/screens/SettingsPage";
import HomePageNavigator from "./HomePageNavigator";

const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = focused ? "restaurant" : "restaurant-outline";
                }
                if (route.name === "Settings") {
                  iconName = focused ? "settings" : "settings-outline";
                }
                if (route.name === "Map") {
                  iconName = focused ? "map" : "map-outline";
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
              showLabel: false,
            }}
          >
            <Tab.Screen name="Home" component={HomePageNavigator} />
            <Tab.Screen name="Map" component={MapPage} />
            <Tab.Screen name="Settings" component={SettingsPage} />
          </Tab.Navigator>
        </NavigationContainer>
    )
}