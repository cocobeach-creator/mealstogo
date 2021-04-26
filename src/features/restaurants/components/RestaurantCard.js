import React from "react";
import { connect } from "react-redux";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/spacer/Spacer";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./RestaurantCard.styles";
import { addRestaurantFav, deleteRestaurantFav } from "../../../redux/actions";

function RestaurantCard({
  restaurant = {},
  isFav = false,
  addRestaurantFav,
  deleteRestaurantFav,
}) {
  const {
    id = 1,
    name = "some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    ],
    vicinity = "100 random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <>
      <Card styles={styles.card} elevation={5}>
        <Card.Content>
          <Card.Cover source={{ uri: photos[0] }} />
          {isFav ? (
            <AntDesign
              style={styles.heartIcon}
              size={30}
              color="#FF0000"
              name="heart"
              onPress={() => deleteRestaurantFav(id)}
            />
          ) : (
            <AntDesign
              style={styles.heartIcon}
              size={30}
              color="white"
              name="hearto"
              onPress={() => addRestaurantFav({id:id, name:name, photos:photos})}
            />
          )}
          <Text style={styles.title}>{name}</Text>
          <View style={styles.iconsContainer}>
            <View style={styles.ratingView}>
              {ratingArray.map((r, i) => (
                <SvgXml key={i} xml={star} width={20} height={20} />
              ))}
            </View>
            <View style={styles.open}>
              {isClosedTemporarily && (
                <Spacer position="right" size="xsmall">
                  <Text variant="label" style={styles.closed}>
                    CLOSED TEMPORARILY
                  </Text>
                </Spacer>
              )}
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Spacer position="left" size="xsmall">
                <Image style={styles.icon} source={{ uri: icon }} />
              </Spacer>
            </View>
          </View>
          <Text style={styles.address}>{vicinity}</Text>
        </Card.Content>
      </Card>
    </>
  );
}

export default connect(null, { addRestaurantFav, deleteRestaurantFav })(
  RestaurantCard
);
