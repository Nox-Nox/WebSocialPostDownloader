import { createTheme } from "@mui/material";

const MainNavigationTheme = createTheme({
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#efefef",
          "&:hover": {
            color: "white",
          },
          textDecoration: "none",
          padding: 20,
          fontSize: 25,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "red",
        },
      },
    },
  },
});

export default MainNavigationTheme;
