import * as React from 'react';
import { Box, Collapse } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import CommentItem from './CommentItem';

import { StyledButton } from './style';

const SideComments = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <Box>
      <StyledButton
        onClick={() => setVisible(!visible)}
        rotated={!visible}
        endIcon={<KeyboardArrowUpIcon className="chevron" />}
        fullWidth
        disableRipple>
        Comments
      </StyledButton>
      <Collapse in={visible} orientation="vertical">
        <Box display="flex" flexDirection="column" gap="1rem">
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </Box>
      </Collapse>
    </Box>
  );
};

export default SideComments;
