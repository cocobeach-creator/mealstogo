import React, { useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";
import { connect } from "react-redux";

function Search({ submitSearch, location, icon, onToggle }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (location.search) {
      const words = location.search.split(" ");
      const capitalize = words
        .map((w) => {
          return w[0].toUpperCase() + w.substr(1);
        })
        .join(" ");
      setSearchTerm(capitalize);
    }
  }, [location]);

  const onChangeSearch = (search) => {
    setSearchTerm(search);
  };

  const pressedIcon = () =>{
    onToggle();
  }

  return (
    <Searchbar
      placeholder="Find a Restaurant"
      onChangeText={onChangeSearch}
      value={searchTerm}
      onSubmitEditing={() => submitSearch(searchTerm)}
      icon={icon}
      onIconPress={icon==="heart" | icon==="heart-outline" ? pressedIcon : null}
    />
  )
}

function mapStateToProps({ location }) {
  return { location };
}

export default connect(mapStateToProps, null)(Search);
