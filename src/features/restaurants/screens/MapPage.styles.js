import { StyleSheet, StatusBar, Platform } from "react-native";
import { spacing } from "../../../utils/theme/sizes";

export const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  mapSearch: {
    position: "absolute",
    zIndex: 1,
    top: Platform.OS === "ios" ? 47 : StatusBar.currentHeight,
    width: "100%",
    padding: spacing.xl,
  },
});
