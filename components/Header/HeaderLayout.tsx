import * as React from 'react';
import {Box, Toolbar} from '@mui/material';

import { AppBarStyled } from './style';

const HeaderLayout = ({ children }: { children: any }) => (
  <AppBarStyled>
    <Toolbar variant="dense" sx={{ justifyContent: 'space-between' }}>
      {children}
    </Toolbar>
  </AppBarStyled>
);

HeaderLayout.Left = ({ children }: any) => (
  <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
    {children}
  </Box>
);

HeaderLayout.Right = ({ children }: any) => <Box display="flex" alignItems="center" style={{ gap: '8px' }}>{children}</Box>;
export default HeaderLayout;
