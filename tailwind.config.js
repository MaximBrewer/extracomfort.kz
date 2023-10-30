import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1621px',
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            fontFamily: {
                sans: ['Monserrat', ...defaultTheme.fontFamily.sans],
            },
            zIndex: {
                200: 200
            },
            colors: {
                primary: {
                    100: "#F1F5F8",
                    200: "#DBC6E9",
                    500: "#56326E"
                },
                sky: {
                    300: "#77DAE9"
                },
                purple: {
                    900: "#56326E"
                }
            },
            backgroundImage: {
                'check': "url('../images/check.svg')",
                'info': "url('../images/info.svg')",
                'markr': "url('../images/markr.svg')"
            }
        }
    },

    plugins: [
        forms,
        require('flowbite/plugin'),
        require('@tailwindcss/typography')
    ],
};
