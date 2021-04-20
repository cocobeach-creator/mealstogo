import React, { useState } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import { styles } from "./Search.styles";

export default function Search({ submitSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const onChangeSearch = (search) => {
    setSearchTerm(search);
  };
  return (
    <View style={styles.search}>
      <Searchbar
        placeholder="Find a Restaurant"
        onChangeText={onChangeSearch}
        value={searchTerm}
        onSubmitEditing={() => {
          submitSearch(searchTerm);
          setSearchTerm("");
        }}
      />
    </View>
  );
}
