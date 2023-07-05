import { Button, Modal } from 'antd'
import React, { useState } from 'react'
import BasicModal from './modal/BasicModal'

const NickNameEdit = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Edit</Button>
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
