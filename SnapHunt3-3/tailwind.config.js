/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,jsx,ts,tsx}",
        "./compenents/**/*.{html,js",
        "public/*.{html,js}",
    ],
    theme: {
        extend: {
            cursor: {
                'aim' : 'url(.assets/cur.png) 25 25, crosshair',
            }
        },
    },
    plugins: [],
}
