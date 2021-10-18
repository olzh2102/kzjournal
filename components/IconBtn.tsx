import { IconButton } from '@mui/material';
import * as React from 'react';

const IconBtn = ({ icon, ...rest }: any) => (
  <IconButton size="large" color="inherit" {...rest}>
    {icon}
  </IconButton>
);

export default IconBtn;
