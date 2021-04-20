import React, { useEffect, useState } from "react";
import { SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";
import Spacer from "../../../components/spacer/Spacer";
import { spacing } from "../../../utils/theme/sizes";
import RestaurantCard from "../components/RestaurantCard";
import { styles } from "./HomePage.styles";
import { connect } from "react-redux";
import { fetchRestaurants, fetchLocation } from "../../../redux/actions";
import Search from "../components/Search";

function HomePage({ restaurants, location, fetchRestaurants, fetchLocation, navigation }) {
  const [loaded, setLoaded] = useState(false);

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



  const submitSearch = async (searchTerm) =>{
    if (!searchTerm){
      return null;
    }
    try {
      await fetchLocation(searchTerm.toLowerCase());
    } catch (err){
      console.log(err);
    }
  };

  useEffect(() => {
    const searchRestaurants = async () => {
      setLoaded(false);
      try {
        const locationString = `${location.lat},${location.lng}`;
        await fetchRestaurants(locationString);
        setTimeout(() => {
          setLoaded(true);
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    };
    if (Object.keys(location).length > 0){
      searchRestaurants();
    }
  }, [location]);

  return (
    <>
      <SafeAreaView style={styles.safeView}>
        <Search submitSearch={submitSearch} />
        {loaded ?
          <FlatList
            data={restaurants}
            renderItem={(r) => (
              <Spacer position="bottom" size="small">
                <TouchableOpacity onPress={()=>navigation.navigate("RestaurantDetails", {restaurant:r.item})}>
                <RestaurantCard restaurant={r.item} />
                </TouchableOpacity>
              </Spacer>
            )}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: spacing.xl }}
          />
         : 
          <ActivityIndicator
            style={styles.spinner}
            animating={!loaded}
            color={Colors.red800}
            size="large"
          />
        }
      </SafeAreaView>
    </>
  );
}

function mapStateToProps({ restaurants, location }) {
  return { restaurants, location };
}

export default connect(mapStateToProps, { fetchRestaurants, fetchLocation })(
  HomePage
);
