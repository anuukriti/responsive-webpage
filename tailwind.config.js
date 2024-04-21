/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            DINProBoldFont: ["DINProBoldFont", "sans"],
            DINProLightFont: ["DINProLightFont", "sans"],
            InknutAntiqua_Regular: ["InknutAntiqua_Regular", "sans"],
        },

        screens: {
            xxxm: "300px",

            xxm: "531px",

            xm: "549px",

            sm: "640px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            md2: "851px",

            lg: "1024px",
            // => @media (min-width: 1024px) { ... }

            lg2: "1181px",

            xl: "1280px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1536px",
            // => @media (min-width: 1536px) { ... }

            "3xl": "1701px",
        },
        extend: {},
    },
    plugins: [],
};
