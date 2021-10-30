import * as React from 'react';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { StyledToggleButton } from './style';

const ColorToggleButton = () => {
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
      sx={{ gap: '8px', mb: 4 }}
    >
      <StyledToggleButton value="popular" size="small" active={alignment === 'popular'}>
        <WhatshotIcon />
        Popular
      </StyledToggleButton>
      <StyledToggleButton value="latest" size="small" active={alignment === 'latest'}>
        <AccessTimeIcon />
        Latest
      </StyledToggleButton>
      <StyledToggleButton value="rating" size="small" active={alignment === 'rating'}>
        <CallMissedOutgoingIcon />
        Rating
      </StyledToggleButton>
      <StyledToggleButton value="subscriptions" size="small" active={alignment === 'subscriptions'}>
        <FormatListBulletedIcon />
        Subscriptions
      </StyledToggleButton>
    </ToggleButtonGroup>
  );
}

export default ColorToggleButton;
