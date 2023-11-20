import { useState } from 'react'
import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
  HeartTwoTone,
} from '@ant-design/icons'
import { Card, Popover, Button, Avatar, List } from 'antd'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { UserPost } from '../constants/type'
import PostImages from './PostImages'
import CommentForm from './form/CommentFrom'
import PostCardContent from './PostCardContent'

type Props = {
  post: UserPost
}

const PostCard = ({ post }: Props) => {
  const { user } = useSelector((state) => state.user)
  const [isLiked, setIsLiked] = useState(false)
  const [isCommentOpen, setIsCommentOpen] = useState(false)
  const onClickLike = useCallback(() => {
    setIsLiked((prev) => !prev)
  }, [])

  const onClickComment = useCallback(() => {
    setIsCommentOpen((prev) => !prev)
  }, [])

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images?.[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key='retweet' />,
          isLiked ? (
            <HeartTwoTone twoToneColor='red' onClick={onClickLike} />
          ) : (
            <>
              <HeartOutlined key='heart' onClick={onClickLike} />
            </>
          ),
          <MessageOutlined onClick={onClickComment} key='comment' />,
          <Popover
            key='more'
            content={
              <Button.Group>
                {user?.id === post.User?.id ? (
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
          avatar={<Avatar>{post.User?.username[0]}</Avatar>}
          title={post.User?.username}
          description={<PostCardContent postData={post.content} />}></Card.Meta>
      </Card>

      {isCommentOpen ? (
        <>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length} Comments`}
            itemLayout='horizontal'
            dataSource={post.Comments}
            renderItem={(item) => (
              <List.Item style={{ marginBottom: 10 }}>
                <List.Item.Meta
                  title={item.User?.username}
                  description={item.content}
                  avatar={
                    <Avatar>{item.User?.username[0]}</Avatar>
                  }></List.Item.Meta>
              </List.Item>
            )}></List>
        </>
      ) : null}
    </div>
  )
}

export default PostCard
