import * as React from 'react';
import Box from '@mui/material/Box';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import CommentItem from './CommentItem';

import { StyledButton } from './style';

const SideComments = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Box>
      <StyledButton
        onClick={() => setVisible(!visible)}
        rotated={!visible}
        endIcon={<KeyboardArrowRightIcon className="arrow-icon" />}
        fullWidth
        disableRipple>
        Comments
      </StyledButton>
      {visible && (
        <Box display="flex" flexDirection="column" gap="1rem">
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </Box>
      )}
    </Box>
  );
};

export default SideComments;
