import React, { useState, useCallback } from 'react'
import { Form, Input, Button } from 'antd'
import Link from 'next/link'
import styled from 'styled-components'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [matchPassword, setMatchPassword] = useState('')

  const ButtonWrapper = styled.div`
    margin-top: 10px;
  `

  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [])
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  return (
    <Form>
      <div>
        <label htmlFor='user-email'>E-mail</label>
        <br />
        <Input
          name='user-email'
          value={email}
          // onChange={onChangeEmail}
          required
        />
      </div>
      <div>
        <label htmlFor='user-password'>Password</label>
        <br />
        <Input
          name='user-password'
          value={email}
          onChange={onChangePassword}
          required
        />
        <Input
          name='user-password'
          value={email}
          onChange={onChangePassword}
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
