import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import HomePage from "../../features/restaurants/screens/HomePage";
import { Platform } from "react-native";
import RestaurantDetailsPage from "../../features/restaurants/screens/RestaurantDetailsPage";

const HomePageStack = createStackNavigator();

export default function HomePageNavigator() {
  return (
    <HomePageStack.Navigator headerMode="none">
      <HomePageStack.Screen name="Homepage" component={HomePage} />
      <HomePageStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsPage}
        options={
          Platform.OS === "ios"
            ? { ...TransitionPresets.ModalPresentationIOS }
            : { ...TransitionPresets.ModalTransition }
        }
      />
    </HomePageStack.Navigator>
  );
}
