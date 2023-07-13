import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
} from '@ant-design/icons'
import { Card, Popover, Button, Avatar } from 'antd'
import { useSelector } from 'react-redux'
import { UserPost } from '../constants/type'
import PostImages from './PostImages'

type Props = {
  post: UserPost
}

const PostCard = ({ post }: Props) => {
  const { user } = useSelector((state) => state.user)
  console.log(user?.id, post.id)
  // console.log(user && user?.id)
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key='retweet' />,
          <HeartOutlined key='heart' />,
          <MessageOutlined key='comment' />,
          <Popover
            key='more'
            content={
              <Button.Group>
                {user?.id === post.User.id ? (
                  <>
                    <Button>Edit</Button>
                    <Button>Remove</Button>
                  </>
                ) : (
                  <Button>Report</Button>
                )}
              </Button.Group>
            }>
            <EllipsisOutlined />
          </Popover>,
        ]}>
        <Card.Meta
          avatar={<Avatar>{post.User.username[0]}</Avatar>}
          title={post.User.username}
          description={post.content}></Card.Meta>
        <Button></Button>
      </Card>
      {/* <CommentForm />
      <Comments /> */}
    </div>
  )
}

export default PostCard
