import React from "react"
import Link from 'next/link'
import { Input, Menu, Row, Col } from 'antd'

const AppLayout = ({ children }) => {

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
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">signup</Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6} >
          left
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