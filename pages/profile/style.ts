import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

export const PaperStyled = styled(Paper)`
    max-width: 800px;
    margin-top: 40px;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid black;
    display: flex;
    height: 300px;
    gap: 16px;
    & > div:first-of-type {
        width: 150px;
        height: 150px;
        border-radius: 8px;
    }
`
