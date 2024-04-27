import React from "react";
import "./component styles/CardList.css";
import {
  Button,
  Typography,
  Box,
  Grid,
  ThemeProvider,
} from "@mui/material";
import { theme } from './theme'

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
                marginTop: theme.spacing(3),
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
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: theme.spacing(3),
                marginBottom: theme.spacing(3)
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
