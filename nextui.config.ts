import { lightTheme, darkTheme, purpleTheme } from "./src/themes";
import { ConfigThemes, NextUIPluginConfig } from "@nextui-org/react";

const themes: ConfigThemes = {
    light: lightTheme,
    dark: darkTheme,
    purple: purpleTheme,
};

export const themeKeys = Object.keys(themes);

const nextUIConfig: NextUIPluginConfig = {
    prefix: "nextui", // prefix for themes variables
    addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
    // defaultTheme: "light", // default theme from the themes object
    // defaultExtendTheme: "light", // default theme to extend on custom themes
    layout: {
        spacingUnit: 4, // in px
        disabledOpacity: "0.5", // this value is applied as opacity-[value] when the component is disabled
        dividerWeight: "1px", // h-divider the default height applied to the divider component
        fontSize: {
            tiny: "0.75rem", // text-tiny
            small: "0.875rem", // text-small
            medium: "1rem", // text-medium
            large: "1.5rem", // text-large
        },
        lineHeight: {
            tiny: "1rem", // text-tiny
            small: "1.25rem", // text-small
            medium: "1.5rem", // text-medium
            large: "1.75rem", // text-large
        },
        radius: {
            small: "4px", // rounded-small
            medium: "6px", // rounded-medium
            large: "8px", // rounded-large
        },
        borderWidth: {
            small: "1px", // border-small
            medium: "2px", // border-medium (default)
            large: "3px", // border-large
        },
        boxShadow: {
            // shadow-small
            small: "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            // shadow-medium
            medium: "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            // shadow-large
            large: "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
        },
    }, // common layout tokens (applied to all themes)
    themes: themes,
};

export default nextUIConfig;
