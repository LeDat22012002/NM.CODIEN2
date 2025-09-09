/** @type {import('tailwindcss').Config} */

export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}', './index.html'],

    theme: {
        extend: {
            width: {
                main: '1300px',
            },
            colors: {
                main: '#0033FF',
                error: '#ee3131',
                mainHP: '#1d428a',
            },
            fontFamily: {
                main: ['Poppins', 'sans-serif'],
            },
            keyframes: {
                slideUp: {
                    '0%': { opacity: '1', transform: 'translateY(0)' },
                    '100%': { opacity: '0', transform: 'translateY(-16px)' },
                },
                slideDown: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(-16px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                'slide-up': 'slideUp 0.4s ease-in',
                'slide-down': 'slideDown 0.4s ease-out',
            },
            backgroundImage: {
                icons: "url('/images/icon-hoaphat.png')",
            },
            backgroundPosition: {
                'icon-prev': '-230px -15px', // tọa độ mũi tên trái
                'icon-next': '-190px -15px', // tọa độ mũi tên phải
            },
            spacing: {
                icon: '32px', // kích thước icon chuẩn
            },
        },
    },
    plugins: [],
};
