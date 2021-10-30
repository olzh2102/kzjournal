import { CardActions, CardContent, Typography, Link, Box } from '@mui/material/';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

import { StyledCard } from './style';

const CommentItem = () => {
  return (
    <StyledCard>
      <CardContent className="card-content">
        <Box className="metadata">
          <Link className="link" href="#" underline="none">
            <PersonOutlineIcon />
            <Typography className="link-title" variant="h6">
              John Doe
            </Typography>
          </Link>
          <Typography className="time" variant="caption">
            2m ago
          </Typography>
        </Box>
        <Typography className="content" variant="body2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic quis repellat qui eius
          possimus atque, minima architecto accusantium dolor...
        </Typography>
      </CardContent>
      <CardActions className="card-actions">
        <Link href="#" underline="none">
          <Typography className="link-title" variant="h6">
            Link to post...
          </Typography>
        </Link>
      </CardActions>
    </StyledCard>
  );
};

export default CommentItem;
