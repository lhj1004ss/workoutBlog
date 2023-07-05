import React, { useCallback } from 'react'
import { Card, Avatar, Button } from 'antd'
import NickNameEdit from '../components/NickNameEdit'

type Props = {
  setIsLogin: (value: boolean) => void
}

const UserProfile = ({ setIsLogin }: Props) => {
  const onLogOut = useCallback(() => {
    setIsLogin(false)
  }, [])

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
      <Button onClick={onLogOut}>Logout</Button>
    </Card>
  )
}
export default UserProfile
