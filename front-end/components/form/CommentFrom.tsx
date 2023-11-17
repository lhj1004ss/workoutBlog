import { Form, Input, Button } from 'antd'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserPost } from '../../constants/type'
import useInput from '../hooks/useInput'

type Props = {
  post: UserPost
}

const CommentForm = ({ post }: Props) => {
  const { user } = useSelector((state) => state.user)
  const { isCommentAddedCompleted, isCommentAddedLoading } = useSelector(
    (state) => state.post
  )
  const dispatch = useDispatch()
  const [comment, onChangeComment, setCommentText] = useInput('')

  useEffect(() => {
    if (isCommentAddedCompleted) {
      setCommentText('')
    }
  }, [isCommentAddedCompleted])

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: 'ADD_COMMENT_REQUEST',
      data: { content: comment, postId: post?.id, userId: user?.id },
    })
  }, [comment, user?.id])

  return (
    <Form style={{ marginTop: 10 }} onFinish={onSubmitComment}>
      <Form.Item>
        <Input.TextArea
          value={comment}
          onChange={(e) => onChangeComment(e.target.value)}
          rows={4}></Input.TextArea>
        <Button
          type='primary'
          htmlType='submit'
          loading={isCommentAddedLoading}
          style={{ float: 'right', marginTop: 10 }}>
          Comment
        </Button>
      </Form.Item>
    </Form>
  )
}
export default CommentForm
