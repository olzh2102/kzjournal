import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { styled } from '@mui/material/styles';

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  '&.Mui-selected': {
    backgroundColor: 'transparent',
    position: 'relative',

    '&::after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: '2px',
      width: '100%',
      backgroundColor: 'black',
      transition: 'all 0.5s',
    },
  },
}));

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('popular');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      sx={{ gap: '8px' }}>
      <StyledToggleButton value="popular" size="small">
        <WhatshotIcon />
        Popular
      </StyledToggleButton>
      <StyledToggleButton value="latest" size="small">
        <AccessTimeIcon />
        Latest
      </StyledToggleButton>
      <StyledToggleButton value="rating" size="small">
        <CallMissedOutgoingIcon />
        Rating
      </StyledToggleButton>
      <StyledToggleButton value="subscriptions" size="small">
        <FormatListBulletedIcon />
        Subscriptions
      </StyledToggleButton>
    </ToggleButtonGroup>
  );
}
