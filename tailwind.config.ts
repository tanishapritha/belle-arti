import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                ivory: "#FAF7F2",
                terracotta: "#C4693A",
                walnut: "#3B2A1A",
                sage: "#8A9E7A",
                cream: "#FDF6EC",
            },
            fontFamily: {
                serif: ["Playfair Display", "serif"],
                sans: ["Outfit", "Inter", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
