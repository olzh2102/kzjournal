import Link from 'next/link'

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
            <Link href="/profile"><AvatarStyled>AB</AvatarStyled></Link>
        </HeaderLayout.Right>
    </HeaderLayout>
);

export default Header;
