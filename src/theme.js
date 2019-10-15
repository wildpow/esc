// default theme preset

export const preset = {
  oldStyles: {
    mainColor1: "#1565c0", // BLUE
    mainColor2: "#eb1c24", // RED !
    // newColor1: "#fffafa", // snow white
    // newColor1: "#fcfcfc", // Try
    newColor1: "#fcfcff", // New
    // newColor1: "F8F8FF",
    newColor2: "#343434", // Jet
    newColor3: "#f8f8ff", // ghost white
    newColor4: "#fbfbff", // New
    newBoxShadow: "0px 6px 6px -6px rgba(52,52,52,0.41)",
    Border: "1px solid #eee",
    RedBorderBottom: "4px solid green",
    TextShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    newTextShadow: "2px 2px 4px rgba(52, 52, 52, 0.4)",
    BoxShadow: "0 10px 6px -6px rgba(119, 119, 119, .6)",
    MainFont1: "'Roboto', sans-serif",
    // MainFont2: "'Open Sans', sans-serif",
    MainFont3: "'Roboto Slab', serif",
    Animation: `animation-duration: .5s; animation-fill-mode: both;`,
    hoverTransition: `box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s`,
    hoverBoxBefore:
      "rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px",
    hoverBoxAfter: `0px 4px 8px rgba(46, 41, 51, 0.08), 0px 8px 16px rgba(71, 63, 79, 0.16)`,
    hoverTransform: `translateY(-4px)`,
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#07c",
    brandBlue: "#1565c0",
    brandRed: "#eb1c24",
    offWhite: "#fcfcff",
    jet: "#343434",
    secondary: "#30c",
    muted: "#f6f6f9",
    gray: "#dddddf",
    highlight: "hsla(205, 100%, 40%, 0.125)",
  },
  fonts: {
    body: "Roboto Slab, serif",
    heading: "Roboto, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  sizes: {
    avatar: 48,
  },
  radii: {
    default: 4,
    circle: 99999,
  },
  shadows: {
    text: "2px 2px 4px rgba(52, 52, 52, 0.4)",
    card: "0 0 4px rgba(0, 0, 0, .125)",
    box: "0px 6px 6px -6px rgba(52,52,52,0.41)",
  },
  // rebass variants
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    display: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      fontSize: [5, 6, 7],
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  variants: {
    avatar: {
      width: "avatar",
      height: "avatar",
      borderRadius: "circle",
    },
    card: {
      p: 2,
      bg: "background",
      boxShadow: "card",
    },
    link: {
      color: "primary",
    },
    nav: {
      fontSize: 1,
      fontWeight: "bold",
      display: "inline-block",
      p: 2,
      color: "inherit",
      textDecoration: "none",
      ":hover,:focus,.active": {
        color: "primary",
      },
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: "bold",
      color: "background",
      bg: "primary",
      borderRadius: "default",
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 2px",
    },
    secondary: {
      variant: "buttons.primary",
      color: "background",
      bg: "secondary",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      fontWeight: "body",
      lineHeight: "body",
    },
  },
};

export default preset;
