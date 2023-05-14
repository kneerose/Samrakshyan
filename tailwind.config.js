module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'], // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#003E6B',
                highLight: '#64748b',
                buttonColor: '#805A5A',
                lightBlackColor: '#2D2D2D',
                textfield_stroke: '#D9E5F6',
                textfield_label: '#4E4E4E',
                success: '#4BB543',
                danger: '#df4759'
            }
        }
    },
    variants: {
        extend: {
            display: ['group-hover']
        }
    },
    plugins: []
};
