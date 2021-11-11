import Image from 'next/image';
import {Box, Typography} from '@mui/material';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { PaperStyled } from './style'

const Overview = () => {
    return (
        <PaperStyled variant="outlined">
            <Image className="image" src="https://leonardo.osnova.io/18c6cdd0-ea0e-536a-a98b-1db21c6c4d2a/-/scale_crop/300x300/-/format/webp/" height={500} width={500}  />
            <Box>
                <Typography variant="h5">Yevgeniy Chebatkov</Typography>
                <Typography variant="subtitle2">With us since 17th of October, 2021</Typography>
            </Box>

            <Box>
                <IconButton aria-label="delete" size="small">
                    <MessageOutlinedIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <MessageOutlinedIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <MessageOutlinedIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <MessageOutlinedIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <MessageOutlinedIcon fontSize="inherit" />
                </IconButton>             
            </Box>
            <Box>
                <Button variant="outlined" size="small">
                    Settings
                </Button>
                <Button variant="contained" size="small">
                    Post
                </Button>
            </Box>
        </PaperStyled>
    )
}

export default Overview; 
