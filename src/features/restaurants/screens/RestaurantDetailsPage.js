import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import {connect} from "react-redux";
import MenuList from "../components/MenuList";
import RestaurantCard from "../components/RestaurantCard";
import { styles } from "./RestaurantDetailsPage.styles";

 function RestaurantDetailsPage({ route, favorites }) {
  const { restaurant } = route.params;

  return (
    <SafeAreaView style={styles.safeView}>
      <RestaurantCard 
      restaurant={restaurant}
      isFav={favorites.favorites.some((f) => f.id === restaurant.id)} 
      />
      <ScrollView>
        <MenuList />
      </ScrollView>
    </SafeAreaView>
  );
}

function mapStateToProps({ favorites }) {
  return { favorites };
}

export default connect(mapStateToProps, null)(RestaurantDetailsPage);