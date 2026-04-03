import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    50: "#fff1f2",
                    100: "#ffe1e1",
                    200: "#ffc2c2",
                    300: "#ff9494",
                    400: "#ff5757",
                    500: "#ED1B24", // Official Bank Jateng Crimson Red
                    600: "#d3121b",
                    700: "#b10e15",
                    800: "#921015",
                    900: "#791418",
                    950: "#430508",
                },
                secondary: {
                    50: "#f0f6ff",
                    100: "#e0ebfe",
                    200: "#bdd7f8",
                    300: "#8fbef5",
                    400: "#5a9df0",
                    500: "#3578e5",
                    600: "#2259c1",
                    700: "#0E4170", // Official Madison Blue
                    800: "#133160",
                    900: "#152c51",
                    950: "#0c1a31",
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
                display: ["var(--font-outfit)", "ui-sans-serif", "system-ui"],
            },
        },
    },
    plugins: [],
};
export default config;
