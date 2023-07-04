import React from "react"
import AppLayout from "../components/AppLayout";
import Head from 'next/head'

const Profile = () => {

  return (
    <>
      <Head>
        <meta chartset='utf-8' />
        <title>Workout | Profile</title>
      </Head>
      <AppLayout>Profile</AppLayout>
    </>
  )
}
export default Profile;