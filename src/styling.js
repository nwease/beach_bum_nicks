export const setColor = {
    primaryColor: '#af9a7d',
    mainWhite: '#fafafa',
    mainBlack: '#222',
    mainGrey: '#ececec',
    lightGrey: '#f7f7f7'
};

export const setFont = {
    main: "font-family: 'Stylish', sans-serif;"
};

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
    return `
        display:flex;
        align-items:${y};
        justify-content:${x}
    `;
};

export const setBackground = ({img = 'https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', color = 'rgba(0,0,0,0)'} = {}) => {
    return `
        background: linear-gradient(${color}, ${color}),
        url(${img}) center/cover fixed no-repeat
    `;
};