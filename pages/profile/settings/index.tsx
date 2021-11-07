import Head from 'next/head';
import { Box } from '@mui/system';

import WithoutComments from 'layout/without-comments';

const ProfileSettingsPage = () => {
  return (
    <div>
      <Head>
        <title>KZJournal - settings</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <Box>Settings Page</Box>
    </div>
  );
};

ProfileSettingsPage.PageLayout = WithoutComments;
export default ProfileSettingsPage;
