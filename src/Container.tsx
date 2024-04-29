import React, { useState } from "react";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import Form from "./Form";
import CardList from "./CardList";
import Header from "./Header";
import { theme } from "./theme";

interface Block {
  id: number;
  firstTeam: string;
  secondTeam: string;
  tickets: string;
  stadium: string;
}

const Container: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  const addButtonHandler = (block: Block) => {
    setBlocks([...blocks, block]);
    setIsVisible(true);
  };

  const removeBlock = (id: number) => {
    setBlocks(blocks.filter((block) => block.id !== id));
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: theme.spacing(5),
            "@media screen and (max-width: 770px)": {
              flexDirection: "column",
            },
          }}
        >
          <Grid
            sx={{
              mt: theme.spacing(20),
              paddingTop: theme.spacing(10),
              paddingBottom: theme.spacing(8),
              paddingLeft: theme.spacing(5),
              paddingRight: theme.spacing(5),
              borderRadius: theme.spacing(8),
              backgroundColor: "primary.main",
              boxShadow: 5,
              color: "secondary.main",
              maxHeight:theme.spacing(82)
            }}
          >
            <Typography
              sx={{
                marginBottom: theme.spacing(3),
                fontSize: theme.spacing(5),
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
    </>
  );
};

export default Container;
