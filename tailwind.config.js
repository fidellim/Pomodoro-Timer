/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                fontColor: 'var(--fontColor)',
            },
        },
    },
    plugins: [],
}
