import styled from '@emotion/styled';
import ToggleButton from '@mui/material/ToggleButton';

export const StyledToggleButton = styled(ToggleButton)<{ active: boolean }>`
  justify-content: center;
  gap: 1rem;
  
  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: ${({ active }) => (active ? '100%' : '0')};
    background-color: black;
    transition: width 0.25s;
  }

  &:hover {
    background-color: transparent;
  }

  &.Mui-selected {
    background-color: transparent;
    position: relative;

    &:hover {
      background-color: transparent;
    }
  }
`;
