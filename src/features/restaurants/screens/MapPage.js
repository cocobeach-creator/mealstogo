import React, { useState, useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";
import Search from "../components/Search";
import { styles } from "./MapPage.styles";
import { connect } from "react-redux";
import { fetchLocation } from "../../../redux/actions";
import CompactRestaurantCard from "../components/CompactRestaurantCard";

function MapPage({ fetchLocation, restaurants, location, navigation, favorites }) {
  const [latDelta, setLatDelta] = useState(0.05);
  const [lngDelta, setLngDelta] = useState(30);

  const { lat = 37.0902, lng = -95.7129, viewport } = location.coordinates;

  useEffect(() => {
    if (viewport && viewport.northeast) {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;

      setLatDelta(northeastLat - southwestLat);
      setLngDelta(0.02);
    }
  }, [location, viewport]);

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

  return (
    <>
      <View style={styles.mapSearch}>
        <Search icon="map" submitSearch={submitSearch} />
      </View>
      <MapView
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: lngDelta,
        }}
        style={styles.map}
      >
        {restaurants.map((r) => (
          <MapView.Marker
            key={r.name}
            title={r.name}
            coordinate={{
              latitude: r.geometry.location.lat,
              longitude: r.geometry.location.lng,
            }}
          >
            <MapView.Callout
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: r })
              }
            >
              <CompactRestaurantCard
              isMap={true} 
              restaurant={r}
              isFav={favorites.favorites.some((f) => f.id === r.id)} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
    </>
  );
}

function mapStateToProps({ restaurants, location, favorites }) {
  return { restaurants, location, favorites };
}

export default connect(mapStateToProps, { fetchLocation })(MapPage);
