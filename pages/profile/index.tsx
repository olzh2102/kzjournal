import Head from 'next/head'

import MainLayout from '../../layout'

const ProfilePage = () => {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <h3>Profile Page</h3>
    </div>
  )
}

ProfilePage.PageLayout = MainLayout
export default ProfilePage