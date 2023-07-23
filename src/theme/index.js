import { createTheme } from "@mui/material/styles";

export const colors = {
  white: "#fff",
  black: "#3A3A3A",
  blue: "#236AF2",
  blueGray: "#F0F5FC",
  gray: "#969696",
  red: "#E15656",
  whiteGray: "#F6F6F7",
  lightGray: "#AFB0B1",
  veryLightGray: "#F6F6F6",
  paragraphGray: "#6C6C6C",
};

const theme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#4B4CB6",
    },
    secondary: {
      main: "#5574F8",
    },
    success: {
      main: "#4BD37B",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {},
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      mdl: 1000,
      lg: 1200,
      xlg: 1400,
      xl: 1536,
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "menu-item", type: "mobile-menu" },
          style: {
            color: colors.black,
            fontSize: "2.5rem",
            fontWeight: 500,
          },
        },
        {
          props: { variant: "menu-item" },
          style: {
            color: colors.black,
            fontSize: "1.5rem",
            fontWeight: 500,
          },
        },
        {
          props: { variant: "logo" },
          style: {
            color: colors.black,
            fontSize: "2.5rem",
            fontWeight: 700,
            fontFamily: "var(--ff-tektur)",
          },
        },
      ],
    },
  },
});

export default theme;
