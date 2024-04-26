import React from "react";
import "./component styles/CardList.css";
import {
  Button,
  Typography,
  Box,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";

interface Block {
  id: number;
  firstTeam: string;
  secondTeam: string;
  tickets: string;
  stadium: string;
}

interface CardListProps {
  blocks: Block[];
  removeBlock: (id: number) => void;
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#000",
      light: "#333",
    },
  },
  spacing: 5,
});

const CardList: React.FC<CardListProps> = ({ blocks, removeBlock }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          margin: 0,
        }}
      >
        {blocks.map((block) => (
          <Grid
            key={block.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: theme.spacing(6),
              width: theme.spacing(70),
              backgroundColor: "primary.main",
              boxShadow: 5,
              marginTop: theme.spacing(2),
            }}
          >
            <Typography
              sx={{
                marginTop: theme.spacing(1),
                fontSize: theme.spacing(4),
                fontFamily: "Platypi",
                fontWeight: 600,
              }}
            >
              Match Info:
            </Typography>
            <Typography
              sx={{
                fontFamily: "Platypi",
                fontSize: theme.spacing(3),
                marginTop: theme.spacing(2),
              }}
            >
              {block.firstTeam} - {block.secondTeam}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Platypi",
                fontSize: theme.spacing(3),
                marginTop: theme.spacing(2),
              }}
            >
              Number of tickets - "{block.tickets}"
            </Typography>
            <Typography
              sx={{
                fontFamily: "Platypi",
                fontSize: theme.spacing(3),
                marginTop: theme.spacing(2),
              }}
            >
              Field - "{block.stadium}"
            </Typography>
            <Button
              onClick={() => removeBlock(block.id)}
              sx={{
                borderRadius: theme.spacing(1.5),
                marginLeft: "auto",
                marginRight: "auto",
                fontSize: theme.spacing(2.4),
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(3),
                height: theme.spacing(5.2),
                width: theme.spacing(20),
                color: "secondary.main",
                border: 1,
                "&:hover": {
                  color: "primary.main",
                  backgroundColor: "secondary.main",
                },
              }}
            >
              Delete
            </Button>
          </Grid>
        ))}
      </Box>
    </ThemeProvider>
  );
};

export default CardList;
