import React from 'react'
import { Card, Avatar } from 'antd'
import NickNameEdit from '../components/NickNameEdit'
import Logout from '../components/Logout'
import Follow from './Follow'
import { useSelector } from 'react-redux'

type Props = {}

const UserProfile = ({}) => {
  const { user } = useSelector((state) => state.user)
  return (
    <Card
      actions={[
        <div key='post'>
          posts
          <br />
          <span>0</span>
        </div>,
        <Follow title="Let's see who you are following" header='followings' />,
        <Follow title="Let's see who is following you" header='followers' />,
      ]}>
      <Card.Meta
        avatar={<Avatar>{user?.username[0]}</Avatar>}
        title={user?.username}></Card.Meta>
      <NickNameEdit />
      <Logout />
    </Card>
  )
}
export default UserProfile
