import Link from 'next/link';

import { MenuItem } from '@mui/material';

import { MenuStyled } from './style';

const ProfileMenu = ({ anchorEl, open, onClose }: MenuProps) => (
  <MenuStyled
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    anchorEl={anchorEl}
    open={open}
    onClose={onClose}>
    <Link href="/profile">
      <MenuItem onClick={onClose} disableRipple>
        Profile
      </MenuItem>
    </Link>
    <Link href="/profile/settings">
      <MenuItem onClick={onClose} disableRipple>
        Settings
      </MenuItem>
    </Link>
  </MenuStyled>
);

export default ProfileMenu;

type MenuProps = {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
};
