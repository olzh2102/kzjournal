import styled from '@emotion/styled';
import ToggleButton from '@mui/material/ToggleButton';

export const StyledToggleButton = styled(ToggleButton)<{ active: boolean }>`
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: ${({ active }) => (active ? '100%' : '0')};
    background-color: black;
    transition: width 0.25s;
  }

  &.Mui-selected {
    background-color: transparent;
    position: relative;
  }
`;
