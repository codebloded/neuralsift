import {
    ThemeProvider,
    createTheme,
    responsiveFontSizes,
} from "@mui/material/styles";
let theme = createTheme({
    typography: {
        fontFamily: "Poppins",
        h2: {
            fontFamily: "DM Serif Display",
        },
    },
    palette: {
        mode: "light",
        custom: {
            primary: {
                main: "#0D1117",
                secondary: "#FAFAFA",
            },
        },
    },
});
theme = responsiveFontSizes(theme);
theme = createTheme(theme, {
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: "yellow",
                    borderRadius: 0,
                    background:
                        "linear-gradient(324deg, rgba(42,103,217,1) 0%, rgba(32,68,134,1) 100%)",
                    "&:hover": {
                        background:
                            "linear-gradient(324deg, rgba(222,60,77,1) 0%, rgba(171,15,37,1) 100%)",
                    },
                },
            },
        },

    },
});

export default theme