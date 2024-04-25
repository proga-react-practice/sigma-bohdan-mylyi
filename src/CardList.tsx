import React from "react";
import './component styles/CardList.css'
import Grid from "@mui/material/Grid";
import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";

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
    <Box sx={{
      margin: 0
    }}>
      {blocks.map((block) => (
        <Grid 
        key={block.id}
        sx={
          {
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 10,
            width: 400,
            backgroundColor: 'white',
            boxShadow: 5,
            marginTop: 1
          }
        }>
          <Typography
          sx={
            {
            marginTop: 3,
            fontSize: 20,
            fontFamily: "Platypi",
            fontWeight: 600,
            }
          }>
            Match Info:
          </Typography>
          <Typography
          sx={{
            fontFamily: "Platypi",
            fontSize: 15,
            marginTop: 1,
          }}>
            {block.firstTeam} - {block.secondTeam}
          </Typography>
          <Typography
          sx={
            {
            fontFamily: "Platypi",
            fontSize: 15,
            marginTop: 1,
            }
          }>
            Number of tickets - "{block.tickets}"
          </Typography>
          <Typography
          sx={{
            fontFamily: "Platypi",
            fontSize: 15,
            marginTop: 1,
          }}>
            Field - "{block.stadium}"
          </Typography>
          <Button
            onClick={() => removeBlock(block.id)}
            sx={
              {
                fontSize: 12,
                marginTop: 2,
                marginBottom: 2,
                height: 27,
                width: 100,
                color: "black",
                border: 1,
                marginLeft: 'auto',
                marginRight: 'auto',
                '&:hover': {
                  color: "white",
                  backgroundColor: "black",
                },
              }
            }
          >
            Delete
          </Button>
        </Grid>
      ))}
    </Box>
  );
};

export default CardList;
