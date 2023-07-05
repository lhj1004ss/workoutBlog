import React from 'react'
import { Form, Input } from 'antd'
import styled from 'styled-components'
type Props = {}

const NickNameEditForm = ({}: Props) => {
  const FromWrapper = styled(Form)`
    marginBotton:'20px';
    border: '1px solid #d9d9d9;
    padding:20px;
  `
  return (
    <>
      <FromWrapper>
        <Input.Search addonBefore='NickName' enterButton='Edit' />
      </FromWrapper>
    </>
  )
}
export default NickNameEditForm
