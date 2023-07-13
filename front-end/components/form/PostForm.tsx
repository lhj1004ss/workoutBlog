import { Form, Input, Button } from 'antd'
import React, { useCallback, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../reducers/post'

const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post)

  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const imageInput = useRef()

  const onChangeImageUpload = useCallback(() => {
    imageInput.current.click()
  }, [imageInput.current])

  const onSubmit = useCallback(() => {
    dispatch(addPost)
    setText('')
  }, [])

  const onChangeText = useCallback((value: string) => {
    setText(value)
  }, [])

  return (
    <Form
      style={{ margin: '10px 0 20px' }}
      encType='multipart/form-data'
      onFinish={onSubmit}>
      <Input.TextArea
        value={text}
        onChange={(e) => onChangeText(e.target.value)}
        maxLength={140}
        placeholder='Share your workout'
      />
      <div>
        <Button type='primary' onClick={onChangeImageUpload}>
          <input type='file' multiple hidden ref={imageInput} />
        </Button>
        <Button type='primary' htmlType='submit' style={{ float: 'right' }}>
          Post
        </Button>
      </div>
      <div>
        {imagePaths.map((key: string) => (
          <div key={key} style={{ display: 'inline-block' }}>
            <img src={key} style={{ width: '200px' }} alt={key} />
            <Button>Remove</Button>
          </div>
        ))}
      </div>
    </Form>
  )
}

export default PostForm
