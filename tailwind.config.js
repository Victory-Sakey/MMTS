/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    // Home and Services build colour classes from a variable (e.g. `text-${color}-600`),
    // which Tailwind can't see when scanning, so generate them explicitly.
    safelist: [
        {
            pattern: /^(bg|text|border)-(green|blue|purple)-(50|100|400|500|600)$/,
            variants: ['hover'],
        },
    ],
    theme: {
        extend: {
            fontFamily: {
                'berkshire': ['"Berkshire Swash"', 'serif'],
                'dancing': ['"Dancing Script"', 'cursive'],
            },
        },
    },
    plugins: [],
}
