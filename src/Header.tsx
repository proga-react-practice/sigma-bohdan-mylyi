import { AppBar, Box, Toolbar, Badge, Avatar } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <Toolbar>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: '#44b700',
                color: '#44b700',
                boxShadow: (theme) => `0 0 0 2px ${theme.palette.background.paper}`,
                '&::after': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  animation: 'ripple 1.2s infinite ease-in-out',
                  border: '1px solid currentColor',
                  content: '""',
                },
              },
              '@keyframes ripple': {
                '0%': {
                  transform: 'scale(.8)',
                  opacity: 1,
                },
                '100%': {
                  transform: 'scale(2.4)',
                  opacity: 0,
                },
              },
            }}
          >
            <Avatar 
              alt="Bohdan Mylyi" 
              src="./src/images/photo_2024-03-31_18-21-22.jpg" 
            />
          </Badge>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
