import styled from '@emotion/styled';
import { AppBar, Button } from '@mui/material';

export const AppBarStyled = styled(AppBar)`
  background-color: #667182;
  position: sticky;
  box-shadow: none;
`;

export const ButtonStyled = styled(Button)`
  background-color: #ebeaec;
  color: #313e50;

  &:hover {
    background-color: #ebeaec;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 4px 7px rgba(0, 0, 0, 0.05),
      0 -1px 0 rgba(0, 0, 0, 0.05), -1px 0 0 rgba(0, 0, 0, 0.05), 1px 0 0 rgba(0, 0, 0, 0.05);
  }
`;
