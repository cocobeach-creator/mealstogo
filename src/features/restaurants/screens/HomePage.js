import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import Spacer from "../../../components/spacer/Spacer";
import { spacing } from "../../../utils/theme/sizes";
import RestaurantCard from "../components/RestaurantCard";
import { styles } from "./HomePage.styles";
import { connect } from "react-redux";
import { fetchRestaurants, fetchLocation } from "../../../redux/actions";
import Search from "../components/Search";
import FavoritesBar from "../components/FavoritesBar";

function HomePage({
  restaurants,
  location,
  fetchRestaurants,
  fetchLocation,
  navigation,
  favorites,
}) {
  const [loaded, setLoaded] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const mountFetch = async () => {
      try {
        await fetchRestaurants();
        setTimeout(() => {
          setLoaded(true);
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    };
    mountFetch();
  }, []);

  const submitSearch = async (searchTerm) => {
    if (!searchTerm) {
      return null;
    }
    try {
      await fetchLocation(searchTerm.toLowerCase());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const searchRestaurants = async () => {
      setLoaded(false);
      try {
        const locationString = `${location.coordinates.lat},${location.coordinates.lng}`;
        await fetchRestaurants(locationString);
        setTimeout(() => {
          setLoaded(true);
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    };
    if (Object.keys(location.coordinates).length > 0) {
      searchRestaurants();
    }
  }, [location]);

  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <View style={styles.search}>
          <Search submitSearch={submitSearch} icon={toggle ? "heart" : "heart-outline"} onToggle={()=>setToggle(!toggle)}/>
        </View>
        {toggle && <FavoritesBar favorites={favorites.favorites} navigation={navigation}/>}
        {loaded ? (
          <FlatList
            data={restaurants}
            renderItem={({ item }) => (
              <Spacer position="bottom" size="small">
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetails", {
                      restaurant: item,
                    })
                  }
                >
                  <RestaurantCard
                    restaurant={item}
                    isFav={favorites.favorites.some((f) => f.id === item.id)}
                  />
                </TouchableOpacity>
              </Spacer>
            )}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: spacing.xl }}
          />
        ) : (
          <ActivityIndicator
            style={styles.spinner}
            animating={!loaded}
            color={Colors.red800}
            size="large"
          />
        )}
      </SafeAreaView>
    </>
  );
}

function mapStateToProps({ restaurants, location, favorites }) {
  return { restaurants, location, favorites };
}

export default connect(mapStateToProps, { fetchRestaurants, fetchLocation })(
  HomePage
);
