import React, { useCallback, useEffect, useState } from 'react'
import Head from 'next/head'
import useInput from '../components/hooks/useInput'
import { Form, Input, Button, Alert } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

const SignUp = () => {
  const dispatch = useDispatch()
  const { signUpLoading } = useSelector((state) => state.user)

  const [password, onChangePassword] = useInput('')
  const [userName, onChangeUserName] = useInput('')
  const [email, onChangeEmail] = useInput('')
  const [matchPassword, setMatchPassword] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const [userNameError, setUserNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const onSubmit = useCallback(() => {
    console.log(email, userName, password, passwordError, userNameError)

    dispatch({
      type: 'SIGN_UP_REQUEST',
      data: { email, userName, password },
    })
  }, [])

  const onChangeMatchPassword = useCallback((value: string) => {
    setMatchPassword(value)
  }, [])

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Workout | SignUp</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor='user-email'>E-mail</label>
          <br />
          <Input
            type='email'
            name='user-email'
            placeholder='me@example.com'
            value={email}
            // required
            onChange={(e) => onChangeEmail(e.target.value)}
          />
          {emailError && <Alert message='hello' type='error' showIcon />}
        </div>
        <div>
          <label htmlFor='user-username'>Username</label>
          <br />
          <Input
            name='user-username'
            value={userName}
            // required
            onChange={(e) => onChangeUserName(e.target.value)}
          />
          {userNameError && <Alert message='hello' type='error' showIcon />}
        </div>
        <div>
          <label htmlFor='user-password'>Password</label>
          <br />
          <Input
            name='user-password'
            value={password}
            // required
            type='password'
            onChange={(e) => onChangePassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='user-matchpassword'>Match Password</label>
          <br />
          <Input
            name='user-matchpassword'
            value={matchPassword}
            // required
            type='password'
            onChange={(e) => onChangeMatchPassword(e.target.value)}
          />

          {passwordError && <Alert message='hello' type='error' showIcon />}
        </div>
        <Button
          htmlType='submit'
          style={{ marginTop: 10 }}
          type='primary'
          loading={signUpLoading}>
          SignUp
        </Button>
      </Form>
    </>
  )
}
export default SignUp
