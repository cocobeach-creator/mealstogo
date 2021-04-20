import React from "react";
import { View } from "react-native";
import { sizes } from "../../utils/theme/sizes";

const sizeVariant = {
  xsmall: 0,
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size, children) => {
  const property = positionVariant[position];
  const sizeIndex = sizeVariant[size];
  const value = sizes[sizeIndex];

  if (property === "marginLeft") {
    return <View style={{ marginLeft: value }}>{children}</View>;
  }
  if (property === "marginRight") {
    return <View style={{ marginRight: value }}>{children}</View>;
  }
  if (property === "marginTop") {
    return <View style={{ marginTop: value }}>{children}</View>;
  }
  if (property === "marginBottom") {
    return <View style={{ marginBottom: value }}>{children}</View>;
  }
};

export default function Spacer({ position = "top", size = "small", children }) {
  return getVariant(position, size, children);
}
