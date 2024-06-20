import withMT from '@material-tailwind/react/utils/withMT';

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
        'path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
        'path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            primary: '#333',
            distant: '#666',
        },
        extend: {},
    },
    plugins: [],
};
export default withMT(config);
