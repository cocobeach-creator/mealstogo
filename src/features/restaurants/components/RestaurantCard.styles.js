import { StyleSheet } from "react-native";
import { colors } from "../../../utils/theme/colors";
import { fonts, fontSizes, fontWeights } from "../../../utils/theme/fonts";
import { spacing } from "../../../utils/theme/sizes";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.bg.primary,
  },
  title: {
    marginTop: spacing.xxl,
    color: colors.ui.primary,
    fontFamily: fonts.heading,
    fontSize: fontSizes.title,
  },
  address: {
    fontFamily: fonts.body,
    fontSize: fontSizes.caption,
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingView: {
    flexDirection: "row",
    paddingTop: spacing.md,
  },
  open: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon: {
    width: 15,
    height: 15,
  },
  closed: {
    fontFamily: fonts.body,
    fontSize: fontSizes.body,
    fontWeight: fontWeights.regular,
    color: colors.ui.error,
  },
});
