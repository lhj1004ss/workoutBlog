import React, { useCallback } from 'react'
import { Form, Input, Button } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'
import useInput from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { loginAction } from '../../reducers'
type Props = {}

const LoginForm = ({}: Props) => {
  const dispatch = useDispatch()
  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')

  const ButtonWrapper = styled.div`
    margin-top: 10px;
  `

  const onSubmitForm = useCallback(() => {
    dispatch(loginAction(email))
    console.log(email, password)
  }, [email, password])

  return (
    <Form style={{ padding: 10 }} onFinish={onSubmitForm}>
      <div>
        <label htmlFor='user-email'>E-mail</label>
        <br />
        <Input
          name='user-email'
          value={email}
          onChange={(e) => onChangeEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='user-password'>Password</label>
        <br />
        <Input
          name='user-password'
          type='password'
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
          required
        />
      </div>
      <ButtonWrapper style={{ marginTop: 10 }}>
        <Button type='primary' htmlType='submit' loading={false}>
          Login
        </Button>
        <Link href='/signup'>
          <a>
            <Button>Sing Up</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </Form>
  )
}
export default LoginForm
