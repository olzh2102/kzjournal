import styled from '@emotion/styled';
import { Paper, Typography, Box } from '@mui/material';

export const StyledPaper = styled(Paper)`
    border-radius: 8px;
    padding: 20px;
    border: 2px solid #14110f;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 4px;

    .image {
        margin: 0;
        border-radius: 8px;
        border: 1px solid black;
    }
`
export const Title = styled(Typography)`
    line-height: 1.1;
    font-weight: bold;
`

export const ContentBoxStyled = styled(Box)`
    display: flex;
    gap: 20px;
`

export const MetadataBoxStyled = styled(Box)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 8px
`