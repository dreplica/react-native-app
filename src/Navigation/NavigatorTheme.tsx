import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const Theme : typeof DefaultTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: '#fff'
    }
}

export default Theme;