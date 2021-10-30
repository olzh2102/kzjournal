import Grid from '@mui/material/Grid';
import SideComments from '../components/SideComments';

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <Grid container spacing={3} style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <Grid item xs>
      Sidebar
    </Grid>

    <Grid
      item
      xs={6}
      style={{ paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {children}
    </Grid>

    <Grid item xs>
      <SideComments />
    </Grid>
  </Grid>
);

export default MainLayout;
