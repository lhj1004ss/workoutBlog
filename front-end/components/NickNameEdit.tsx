import { Button } from 'antd'
import React, { useState } from 'react'
import BasicModal from './modal/BasicModal'
import { EditOutlined } from '@ant-design/icons'

const NickNameEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>
        Edit <EditOutlined key='edit' />
      </Button>
      <BasicModal
        title='Nickname Edit'
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}>
        nickname edit modal
      </BasicModal>
    </>
  )
}
export default NickNameEdit
