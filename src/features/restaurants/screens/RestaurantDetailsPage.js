import React from "react";
import { Text, SafeAreaView } from "react-native";
import RestaurantCard from "../components/RestaurantCard";
import {styles} from "./RestaurantDetailsPage.styles";

export default function RestaurantDetailsPage({route}){

    const {restaurant} = route.params;
    
    return(
        <SafeAreaView style={styles.safeView}>
        <Text>Restaurant Details</Text>
        <RestaurantCard restaurant={restaurant}/>
        </SafeAreaView>
    )
}