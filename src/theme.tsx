import { createTheme } from "@mui/material";


export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
              borderRadius: '8px',
              fontSize: '12px',
              marginTop: '20px',
              height: '26px',
              width: '100px',
              color: "#000",
              border: '1px solid',
              "&:hover": {
                color: "#fff",
                backgroundColor: "#000",
              }
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
          root: {
            marginBottom: '30px',
            width: '280px',
            height: '25px',
            borderRadius: '5px',
            marginLeft: '10px',
            marginRight: '10px'
          },
      },
  },
  },
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#000",
        light: "#333"
      },
    },
    spacing: 5,
  });

  