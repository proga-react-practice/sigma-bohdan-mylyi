import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import CardList from "./CardList";
import {
  Typography,
  Grid,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./Header";

interface Block {
  id: number;
  firstTeam: string;
  secondTeam: string;
  tickets: string;
  stadium: string;
}

const App: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const addButtonHandler = (block: Block) => {
    setBlocks([...blocks, block]);
    setIsVisible(true);
  };

  const removeBlock = (id: number) => {
    setBlocks(blocks.filter((block) => block.id !== id));
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
        light: "#333"
      },
      secondary: {
        main: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 15,
          }}
        >
          <Grid
            sx={{
              paddingTop: 4,
              paddingBottom: 6,
              paddingLeft: 3,
              paddingRight: 3,
              borderRadius: 10,
              backgroundColor: "primary.main",
              boxShadow: 5,
              color: "secondary.main"
            }}
          >
            <Typography
              sx={{
                marginTop: 3,
                marginBottom: 3,
                fontSize: 23,
                fontFamily: "Platypi",
                fontWeight: 600,
              }}
            >
              Football Match Form
            </Typography>
            <Form addButtonHandler={addButtonHandler} />
          </Grid>
          {isVisible && <CardList blocks={blocks} removeBlock={removeBlock} />}
        </Box>
    </ThemeProvider>
  );
};

export default App;