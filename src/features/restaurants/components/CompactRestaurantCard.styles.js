import { StyleSheet } from "react-native";
import { spacing } from "../../../utils/theme/sizes";
import { fonts, fontSizes, fontWeights } from "../../../utils/theme/fonts";
import { colors } from "../../../utils/theme/colors";

export const styles = StyleSheet.create({
  compactCard: {
    padding: spacing.md,
    maxWidth: 120,
    alignItems: "center",
  },
  compactImage: {
    borderRadius: 10,
    width: 120,
    height: 100,
  },
  name: {
    fontSize: fontSizes.caption,
    fontWeight: fontWeights.bold,
    fontFamily: fonts.body,
    color: colors.text.primary,
  },
  heartIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  }
});
