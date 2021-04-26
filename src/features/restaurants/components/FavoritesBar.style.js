import {StyleSheet} from "react-native";
import { colors } from "../../../utils/theme/colors";
import { fonts, fontSizes, fontWeights } from "../../../utils/theme/fonts";
import { spacing } from "../../../utils/theme/sizes";

export const styles = StyleSheet.create({
    favoritesWrapper:{
        padding: spacing.lg,
        backgroundColor: colors.bg.primary
    },
    compactCardWrapper:{
        padding: spacing.lg
    },
    title:{
        fontSize: fontSizes.caption,
        fontWeight: fontWeights.bold,
        fontFamily: fonts.body,
        color: colors.text.primary
    }
})