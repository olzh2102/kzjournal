import Link from 'next/link';
import { useState } from 'react';

import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import { StyledToggleButton } from './style';

const ColorToggleButton = () => {
  const [alignment, setAlignment] = useState('popular');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      sx={{ gap: '16px', mb: 4, justifyContent: 'center' }}>
      <Link href="/">
        <StyledToggleButton value="popular" size="small" active={alignment === 'popular'}>
          <WhatshotIcon />
          Popular
        </StyledToggleButton>
      </Link>
      <Link href="/latest">
        <StyledToggleButton value="latest" size="small" active={alignment === 'latest'}>
          <AccessTimeIcon />
          Latest
        </StyledToggleButton>
      </Link>
      <Link href="/rating">
        <StyledToggleButton value="rating" size="small" active={alignment === 'rating'}>
          <CallMissedOutgoingIcon />
          Rating
        </StyledToggleButton>
      </Link>
      <Link href="/subscriptions">
        <StyledToggleButton
          value="subscriptions"
          size="small"
          active={alignment === 'subscriptions'}>
          <FormatListBulletedIcon />
          Subscriptions
        </StyledToggleButton>
      </Link>
    </ToggleButtonGroup>
  );
};

export default ColorToggleButton;
