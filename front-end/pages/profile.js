import React from "react"
import AppLayout from "../components/AppLayout";
import Head from 'next/head'
import NickNameEditForm from '../components/form/NickNameEditForm'
import FollowList from '../components/list/followList'
const Profile = () => {
  const followerList = [{ nickname: "hyoje" }, { nickname: "jae" }, { nickname: "workout", }]
  const followingList = [{ nickname: "hyoje" }, { nickname: "jae" }, { nickname: "workout", }]

  return (
    <>
      <Head>
        <meta chartset='utf-8' />
        <title>Workout | Profile</title>
      </Head>
      <AppLayout>
        <NickNameEditForm />
        <FollowList header='following list' followOrfollowingList={followerList} />
        <FollowList header='follower list' followOrfollowingList={followerList} />
      </AppLayout>
    </>
  )
}
export default Profile;