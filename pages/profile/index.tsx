import Head from 'next/head'

import WithoutComments from '../../layout/without-comments'
import Overview from './overview'

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Overview />
    </>
  )
}

ProfilePage.PageLayout = WithoutComments;
export default ProfilePage;
