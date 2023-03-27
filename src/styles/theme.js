const fontStyle = {
  logo: "'Alkatra', cursive",
};

const colors = {
  black: '#2C3333',
  gray: '#E8E2E2',
  charcoal: '#262A56',
  silver: '#F5F5F5',
  white: '#ffffff',
  red: '#F55050',
  lightred: '#F48484',
  orange: '#FAAB78',
  pink: '#FFCEFE',
  lightpink: '#FDEBED',
  purple: '#D9ACF5',
  navy: '#2B3467',
  blue: '#62CDFF',
  skyblue: '#C9EEFF',
  green: '#B5F1CC',
};

const sizes = {
  xxSmall: '8px',
  xSmall: '10px',
  small: '12px',
  medium: '16px',
  large: '24px',
  xLarge: '36px',
  xxLarge: '48px',
};

const mixins = {
  flexBox: (align = 'center', justify = 'center') => `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
  `,

  transform: (top = '50%', left = '50%') => `
    position: absolute;
    top: ${top};
    left: ${left};
    transform: translate(-${top}, -${left});
  `,
};

const theme = {
  fontStyle,
  colors,
  sizes,
  mixins,
};

export default theme;
