import React from 'react'
import { List, Button } from 'antd'
import { StopOutlined } from '@ant-design/icons'

type Props = {
  header: string
  followOrfollowingList: Array<{ nickname: string }>
}

const FollowList = ({ header, followOrfollowingList }: Props) => {
  return (
    <List
      dataSource={followOrfollowingList}
      renderItem={(item) => (
        <List.Item key={item.nickname}>
          <List.Item.Meta description={item.nickname} />
          <Button>
            Disconnect <StopOutlined />
          </Button>
        </List.Item>
      )}
    />
  )
}
export default FollowList
