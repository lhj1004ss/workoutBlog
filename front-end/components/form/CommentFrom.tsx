import { Form, Input, Button } from 'antd'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { UserPost } from '../../constants/type'
import useInput from '../hooks/useInput'

type Props = {
  post: UserPost
}

const CommentForm = (post: Props) => {
  const { user } = useSelector((state) => state.user)
  const [comment, onChangeComment] = useInput('')
  const onSubmitComment = useCallback(() => {
    console.log(post.id, comment)
  }, [comment])
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
          style={{ float: 'right', marginTop: 10 }}>
          Comment
        </Button>
      </Form.Item>
    </Form>
  )
}
export default CommentForm
