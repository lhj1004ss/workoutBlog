import React, { useState } from "react"
import Link from 'next/link'
import { Input, Menu, Row, Col } from 'antd'
import UserProfile from "./UserProfile";
import LoginForm from "./form/LoginForm";
import styled from 'styled-components'
import { useSelector } from "react-redux";


const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn)
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">SignUp</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6} >
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
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