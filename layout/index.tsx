import { motion } from 'framer-motion';

import Grid from '@mui/material/Grid';
import SideComments from 'components/SideComments';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <Grid container spacing={3} style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <Grid item xs>
      Sidebar
    </Grid>

    <Grid
      item
      xs={6}
      style={{ paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: 'linear' }}
        className="
                    flex flex-col items-start w-full pt-10
                    px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
                    pt-24 h-full
                ">
        {children}
      </motion.main>
    </Grid>

    <Grid item xs>
      <SideComments />
    </Grid>
  </Grid>
);

export default MainLayout;
