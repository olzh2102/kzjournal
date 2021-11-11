import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';

export const PaperStyled = styled(Paper)`
    min-width: 700px;
    margin: 40px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-radius: 20px;
    border: 1px solid black;
    display: flex;
    height: 300px;
    gap: 16px;

    .name {
        display: flex;
        gap: 16px;

        & > div:first-of-type {
            width: 150px;
            height: 150px;
            border-radius: 20px;
        }

        .cta-buttons {
            margin-left: auto;
            > button {
                margin-right: 10px;    
            }
        }
    }
`
