import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
import nextUIConfig from "./nextui.config";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                icon: "#697177",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui(nextUIConfig)],
};

export default config;
