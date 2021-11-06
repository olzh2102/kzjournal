import styled from '@emotion/styled';
import { AppBar, Button, Avatar, Menu } from '@mui/material';

export const AppBarStyled = styled(AppBar)`
  background-color: white;
  position: sticky;
  box-shadow: none;
  color: black;
`;

export const ButtonStyled = styled(Button)`
  background-color: #d9c5b2;
  color: #313e50;
  border: 1px solid black;
  font-weight: bold;

  &:hover {
    background-color: #ebeaec;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 4px 7px rgba(0, 0, 0, 0.05),
      0 -1px 0 rgba(0, 0, 0, 0.05), -1px 0 0 rgba(0, 0, 0, 0.05), 1px 0 0 rgba(0, 0, 0, 0.05);
  }
`;

export const AvatarStyled = styled(Avatar)`
  width: 35px;
  height: 35px;
  font-size: 0.75rem;
  font-weight: bold;
  background-color: #d9c5b2;
  color: black;
  border: 1px solid black;
  cursor: pointer;
`;

export const MenuStyled = styled(Menu)`
  & .MuiPaper-root {
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.1) 0px 2px 14px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }
`;
