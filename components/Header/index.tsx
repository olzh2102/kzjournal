import Link from 'next/link';
import { useState } from 'react';

import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import HeaderLayout from './HeaderLayout';
import IconBtn from '../IconBtn';
import SearchBar from '../SearchBar';
import ProfileMenu from './ProfileMenu';

import { ButtonStyled, AvatarStyled } from './style';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderLayout>
      <HeaderLayout.Left>
        <IconBtn icon={<MenuIcon />} edge="start" sx={{ mr: 2 }} />
        <Link href="/">
          <Typography variant="h6" sx={{ fontFamily: 'Mukta', cursor: 'pointer' }}>
            KZ
          </Typography>
        </Link>
        <SearchBar />
        <ButtonStyled variant="contained" disableElevation>
          New post
        </ButtonStyled>
      </HeaderLayout.Left>

      <HeaderLayout.Right>
        <IconBtn icon={<TextsmsOutlinedIcon />} />
        <IconBtn icon={<NotificationsNoneIcon />} />
        <Link href="/profile">
          <AvatarStyled>AB</AvatarStyled>
        </Link>
        <IconButton size="small" color="inherit" onClick={handleProfileMenuOpen} disableRipple>
          <KeyboardArrowDownIcon />
        </IconButton>
        <ProfileMenu anchorEl={anchorEl} open={isMenuOpen} onClose={handleMenuClose} />
      </HeaderLayout.Right>
    </HeaderLayout>
  );
};

export default Header;
