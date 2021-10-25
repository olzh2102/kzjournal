import styled from '@emotion/styled';
import InputBase from '@mui/material/InputBase';

export const Search = styled.div`
  position: relative;
  border-radius: ${({ theme }: any) => theme.shape.borderRadius}px;
  background-color: ${({ theme }: any) => theme.palette.common.white};
  color: black;

  &:hover {
    background-color: ${({ theme }: any) => theme.palette.common.white};
    border-color: #ffddad;
    box-shadow: 0 0 0 3px rgb(229 160 64 / 12%);
  }
  margin: ${({ theme }: any) => theme.spacing(0, 2)};
  width: 250px;
`;

export const SearchIconWrapper = styled.div`
  padding: ${({ theme }: any) => theme.spacing(0, 2)};
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInputBase = styled(InputBase)`
  color: inherit;

  & .MuiInputBase-input {
    padding: ${({ theme }: any) => theme.spacing(1, 1, 1, 0)};
    padding-left: ${({ theme }: any) => `calc(1em + ${theme.spacing(4)})`};
    transition: ${({ theme }: any) => theme.transitions.create('width')};
    width: 100%;
  }
`;
