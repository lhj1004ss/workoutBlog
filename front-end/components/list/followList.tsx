import React from 'react'
import { List, Button } from 'antd'
import { StopOutlined } from '@ant-design/icons'

type Props = {
  header: string
  followOrfollowingList: Array<{ nickname: string }>
}

const FollowList = ({ header, followOrfollowingList }: Props) => {
  return (
    // <List
    //   style={{ marginBottom: 20 }}
    //   grid={{ gutter: 4, xs: 2, md: 3 }}
    //   size='small'
    //   header={<div>{header}</div>}
    //   loadMore={
    //     <div style={{ textAlign: 'center', margin: '10px 0' }}>
    //       <Button>More</Button>
    //     </div>
    //   }
    //   bordered
    //   dataSource={followOrfollowingList}
    //   renderItem={(item) => (
    //     <List.Item
    //       style={{
    //         marginTop: 20,
    //         alignItems: 'center',
    //         alignContent: 'center',
    //       }}>
    //       <Card style={{ width: 240 }} actions={[<StopOutlined key='stop' />]}>
    //         <Card.Meta description={item.nickname} />
    //       </Card>
    //     </List.Item>
    //   )}
    // />
    <List
      dataSource={followOrfollowingList}
      renderItem={(item) => (
        <List.Item key={item.nickname}>
          <List.Item.Meta
            // avatar={<Avatar src={item.picture.large} />}
            // title={<a href='https://ant.design'>{item.name.last}</a>}
            description={item.nickname}
          />
          <Button>
            Disconnect <StopOutlined />
          </Button>
        </List.Item>
      )}
    />
  )
}
export default FollowList
