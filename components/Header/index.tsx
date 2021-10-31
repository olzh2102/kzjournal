import * as React from 'react';

import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';

import HeaderLayout from './HeaderLayout';
import IconBtn from '../IconBtn';
import SearchBar from '../SearchBar';

import { ButtonStyled, AvatarStyled} from './style';

const Header = () => (
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
            <IconBtn icon={<TextsmsOutlinedIcon />} />
            <IconBtn icon={<NotificationsNoneIcon />} />
            <AvatarStyled>AB</AvatarStyled>
        </HeaderLayout.Right>
    </HeaderLayout>
);

export default Header;
