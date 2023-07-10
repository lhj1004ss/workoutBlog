import React from 'react'
import { Card, Avatar } from 'antd'
import NickNameEdit from '../components/NickNameEdit'
import Logout from '../components/Logout'
import Follow from './Follow'

type Props = {}

const UserProfile = ({}) => {
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
      <Card.Meta avatar={<Avatar>HJ</Avatar>}></Card.Meta>
      <NickNameEdit />
      <Logout />
    </Card>
  )
}
export default UserProfile
