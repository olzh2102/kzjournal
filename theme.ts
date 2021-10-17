import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'inherit'
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    height: '20px'
                },
            }
        },
    }
})