import React from "react";
import {connect} from "react-redux";
import { Text, Image, View, Platform } from "react-native";
import { styles } from "./CompactRestaurantCard.styles";
import WebView from "react-native-webview";
import { AntDesign } from "@expo/vector-icons";
import { addRestaurantFav, deleteRestaurantFav } from "../../../redux/actions";

function CompactRestaurantCard({ restaurant = {}, isFav, deleteRestaurantFav, addRestaurantFav, isMap }) {
  const {
    id,
    name = "some restaurant",
    photos = [
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    ],
  } = restaurant;

  const photo = photos[0];
  return (
    <View style={styles.compactCard}>
      {Platform.OS === "android" && isMap ? (
        <WebView style={styles.compactImage} source={{ uri: photo }} />
      ) : (
        <Image
          style={styles.compactImage}
          source={{ uri: photo }}
          resizeMode={"cover"}
        />
      )}
      {isFav ? (
            <AntDesign
              style={styles.heartIcon}
              size={20}
              color="#FF0000"
              name="heart"
              onPress={() => deleteRestaurantFav(id)}
            />
          ) : (
            <AntDesign
              style={styles.heartIcon}
              size={20}
              color="white"
              name="hearto"
              onPress={() => addRestaurantFav({id:id, name:name, photos:photos})}
            />
          )}
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

export default connect(null, {deleteRestaurantFav, addRestaurantFav})(CompactRestaurantCard);