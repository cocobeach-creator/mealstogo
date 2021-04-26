import { StatusBar, StyleSheet } from "react-native";
import { spacing } from "../../../utils/theme/sizes";

export const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  spinner: {
    flex: 1,
  },
  search: {
    padding: spacing.xl,
  },
});
