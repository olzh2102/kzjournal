import Head from 'next/head';

import MainLayout from '../../../layout';

const ProfileSettingsPage = () => {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <h3>Settings Page</h3>
    </div>
  );
};

ProfileSettingsPage.PageLayout = MainLayout;
export default ProfileSettingsPage;
