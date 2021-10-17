import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Button from '@mui/material/Button';
import SmsIcon from '@mui/icons-material/Sms';

import { styled } from '@mui/system';

import SearchBar from '../SearchBar';

const AppBarStyled = styled(AppBar)`
  background-color: #313e50;
  position: static;
`;

const ButtonStyled = styled(Button)`
  background-color: #ebeaec;
  color: #313e50;

  &:hover {
    background-color: #ebeaec;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 4px 7px rgba(0, 0, 0, 0.05),
      0 -1px 0 rgba(0, 0, 0, 0.05), -1px 0 0 rgba(0, 0, 0, 0.05), 1px 0 0 rgba(0, 0, 0, 0.05);
  }
`;

const HeaderLayout = ({ children }: { children: any }) => {
  return (
    <AppBarStyled>
      <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
        {children}
      </Toolbar>
    </AppBarStyled>
  );
};

HeaderLayout.Left = ({ children }: any) => {
  return (
    <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
      {children}
    </Box>
  );
};

HeaderLayout.Right = ({ children }: any) => {
  return <Box>{children}</Box>;
};

const IconBtn = ({ icon, ...rest }: any) => {
  return (
    <IconButton size="large" color="inherit" {...rest}>
      {icon}
    </IconButton>
  );
};

const Header = () => {
  return (
    <HeaderLayout>
      <HeaderLayout.Left>
        <IconBtn icon={<MenuIcon />} edge="start" sx={{ mr: 2 }} />
        <Typography variant="h6" sx={{ fontFamily: 'Mukta' }}>
          KZ
        </Typography>
        <SearchBar />
        <ButtonStyled variant="contained" disableElevation>
          New post
        </ButtonStyled>
      </HeaderLayout.Left>

      <HeaderLayout.Right>
        <IconBtn icon={<SmsIcon />} />
        <IconBtn icon={<NotificationsNoneIcon />} />
        <IconBtn icon={<PersonOutlineIcon />} edge="end" />
      </HeaderLayout.Right>
    </HeaderLayout>
  );
};

export default Header;
