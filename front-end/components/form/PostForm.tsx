import { Form, Input, Button } from 'antd'
import React, { useCallback, useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../../reducers/post'
import useInput from '../hooks/useInput'

const PostForm = () => {
  const { imagePaths, isPostAddedCompleted } = useSelector(
    (state) => state.post
  )

  const dispatch = useDispatch()
  const [text, onChangeText, setText] = useInput('')
  const imageInput = useRef()

  useEffect(() => {
    if (isPostAddedCompleted) {
      setText('')
    }
  }, [isPostAddedCompleted])

  const onChangeImageUpload = useCallback(() => {
    imageInput.current.click()
  }, [imageInput.current])

  const onSubmit = useCallback(() => {
    dispatch(addPost(text))
  }, [text])

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
