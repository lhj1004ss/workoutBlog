import React, { useState } from "react"
import Link from 'next/link'
import { Input, Menu, Row, Col } from 'antd'
import UserProfile from "./UserProfile";
import LoginForm from "./form/LoginForm";
import styled from 'styled-components'

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`

const AppLayout = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">profile</Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">signup</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6} >
          {isLogin ? <UserProfile setIsLogin={setIsLogin} /> : <LoginForm setIsLogin={setIsLogin} />}
        </Col>
        <Col xs={24} md={12} >
          {children}
        </Col>

        <Col xs={24} md={6} >
          <a href="https://www.linkedin.com/in/hyoje-lee-323597169/" targer="_blank" rel="noreferrer noopener">Made by Hyoje Lee</a>
        </Col>

      </Row>
    </>
  )
}
export default AppLayout;