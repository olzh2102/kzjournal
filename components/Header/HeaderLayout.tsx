import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

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

HeaderLayout.Right = ({ children }: any) => <Box>{children}</Box>;
export default HeaderLayout;
