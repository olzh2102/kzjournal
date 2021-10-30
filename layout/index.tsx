import Grid from '@mui/material/Grid';

const MainLayout = ({children}: {children: React.ReactNode}) => (
    <Grid container spacing={3} style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Grid item xs>Sidebar</Grid>
        
        <Grid item xs={6} style={{ paddingLeft: 0 }}>
          {children}
        </Grid>
        
        <Grid item xs>Comments</Grid>
    </Grid>
)

export default MainLayout;