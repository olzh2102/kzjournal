import styled from '@emotion/styled';
import { Button, Card } from '@mui/material';

export const StyledCard = styled(Card)`
  box-shadow: none;
  min-width: 275px;

  .card-content {
    padding: 0.25rem 0;

    .metadata {
      display: flex;
      align-items: center;
    }

    .time {
      opacity: 0.6;
      margin-left: 0.5rem;
    }

    .content {
      margin-top: 0.25rem;
    }
  }

  .card-actions {
    padding: 0;
  }

  .link-title {
    font-size: 14px;
    font-weight: 600;
  }

  .link {
    display: flex;
  }
`;

export const StyledButton = styled(Button)<{ rotated: boolean }>`
  font-weight: 600;
  justify-content: flex-start;
  padding: 7px 0;
  transform: ${({ rotated }) => (rotated ? 'rotate(-90deg) translateX(70%)' : 'none')};
  transform-origin: ${({ rotated }) => (rotated ? 'right' : 'none')};

  &:hover {
    background-color: transparent;
  }

  .arrow-icon {
    transform: ${({ rotated }) => (rotated ? 'rotate(270deg)' : 'none')};
  }
`;
