import Head from 'next/head';
import { Box } from '@mui/material';

import WithoutComments from 'layout/without-comments';

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>KZJournal</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <Box>Rating</Box>
    </>
  );
};

ProfilePage.PageLayout = WithoutComments;
export default ProfilePage;
