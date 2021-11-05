import Image from 'next/image';
import {Box, Typography} from '@mui/material';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

import { PaperStyled } from './style'

const Overview = () => {
    return (
        <PaperStyled variant="outlined">
            <Image className="image" src="https://leonardo.osnova.io/18c6cdd0-ea0e-536a-a98b-1db21c6c4d2a/-/scale_crop/300x300/-/format/webp/" height={500} width={500}  />
            <Box>
                <Typography variant="h5">Yevgeniy Chebatkov</Typography>
                <Typography variant="subtitle2">With us since 17th of October, 2021</Typography>
                <Box 
                    style={{
                        display: 'inline-flex',
                        padding: '10px',
                        border: '1px solid black',
                        borderRadius: '8px',
                        backgroundColor: '#d9c5b2',
                        cursor: 'pointer'
                    }}>
                    <MessageOutlinedIcon fontSize="small" />
                </Box>
            </Box>
        </PaperStyled>
    )
}

export default Overview; 
