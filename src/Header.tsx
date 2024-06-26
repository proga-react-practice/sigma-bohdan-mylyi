import { AppBar, Box, Toolbar, Badge, Avatar, ThemeProvider, Tooltip, Menu, MenuItem, Typography, IconButton } from "@mui/material";
import React from "react";
import { theme } from "./theme";
import { Instagram, Telegram } from "@mui/icons-material";
import ProgressBar from "./ProgressBar";

const Header: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = React.useState<HTMLButtonElement | null>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(event.currentTarget as HTMLButtonElement);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/__bogg_', '_blank');
    handleCloseUserMenu();
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/bohdan_mylyi', '_blank');
    handleCloseUserMenu();
  };

  const contacts = ['Telegram', 'Instagram'];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            "@media screen and (max-width: 426px)": {
              width: '100%'
            },
          }}
        >
          <ProgressBar />
          <Toolbar>
            <Badge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: theme.palette.success.light,
                  color: theme.palette.success.light,
                  boxShadow: (theme) =>
                    `0 0 0 2px ${theme.palette.background.paper}`,
                  "&::after": {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    animation: "ripple 1.2s infinite ease-in-out",
                    border: "1px solid currentColor",
                    content: '""',
                  },
                },
                "@keyframes ripple": {
                  "0%": {
                    transform: "scale(.8)",
                    opacity: 1,
                  },
                  "100%": {
                    transform: "scale(2.4)",
                    opacity: 0,
                  },
                },
              }}
            >
              <Tooltip title="Contacts">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Bohdan Mylyi"
                    src="./src/images/photo_2024-03-31_18-21-22.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {contacts.map((contact) => (
                  <MenuItem key={contact} onClick={contact === 'Instagram' ? handleInstagramClick : handleTelegramClick}>
                    {contact === 'Instagram' ? <Instagram /> : <Telegram />}
                    <Typography textAlign="center" sx={{ml: "6px"}}>{contact}</Typography>
                  </MenuItem>
                ))}
              </Menu>

            </Badge>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};

export default Header;
