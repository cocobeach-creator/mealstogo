import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import {styles} from "./FavoritesBar.style";
import CompactRestaurantCard from "./CompactRestaurantCard";

export default function FavoritesBar({favorites, navigation}){

    if(favorites.length===0){
        return null;
    }

    return(
        <View style={styles.favoritesWrapper}>
        <Text style={styles.title}>Favorites</Text>
        <ScrollView horizontal={true}>
        {
            favorites.map((r) =>(
                <View style={styles.compactCardWrapper}  key={r.id} >
                <TouchableOpacity onPress={()=>navigation.navigate("RestaurantDetails", {
                      restaurant: r,
                    })}>
                <CompactRestaurantCard
                isMap={false} 
                restaurant={r}
                isFav={favorites.some((f) => f.id === r.id)}/>
                </TouchableOpacity>
                </View>
            )
                
            )
        }
        </ScrollView>
        </View>
    )
}