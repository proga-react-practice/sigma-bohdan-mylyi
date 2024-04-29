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
              },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
          root: {
            marginBottom: '30px',
            width: '270px',
            height: '25px',
            borderRadius: '5px',
            marginLeft: '10px',
            marginRight: '10px',
            '& .MuiInput-underline:before': {
              borderBottomColor: '#000',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#000',
            },
            '& .MuiInput-underline:hover:before': {
              borderBottomColor: '#000',
            },
          },
          
      },
  },
  },
    palette: {
      primary: {
        main: "#F3F8FF",
      },
      secondary: {
        main: "#000",
        light: "#333"
      },
    },
    spacing: 5,
  });

  