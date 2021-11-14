import Head from 'next/head'

import WithoutComments from '../../layout/without-comments'
import Overview from './overview'

const ProfilePage = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Overview />
    </>
  )
}

ProfilePage.PageLayout = WithoutComments;
export default ProfilePage;
