import * as React from 'react';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SmsIcon from '@mui/icons-material/Sms';

import HeaderLayout from './HeaderLayout';
import IconBtn from '../IconBtn';
import SearchBar from '../SearchBar';

import { ButtonStyled } from './style';

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
