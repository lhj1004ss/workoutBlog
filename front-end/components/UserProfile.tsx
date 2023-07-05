import React, { useCallback, useState } from 'react'
import { Card, Avatar } from 'antd'
import NickNameEdit from '../components/NickNameEdit'
import Logout from '../components/Logout'

type Props = {
  setIsLogin: (value: boolean) => void
}

const UserProfile = ({ setIsLogin }: Props) => {
  return (
    <Card
      actions={[
        <div key='post'>
          posts
          <br />
          <span>0</span>
        </div>,
        <div key='followings'>
          connections
          <br />
          <span>0</span>
        </div>,
        <div key='followers'>
          connect <br />
          <span>0</span>
        </div>,
      ]}>
      <Card.Meta avatar={<Avatar>HJ</Avatar>}></Card.Meta>
      <NickNameEdit />
      <Logout setIsLogin={setIsLogin} />
    </Card>
  )
}
export default UserProfile
