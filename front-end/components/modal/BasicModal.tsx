import { Button, Modal } from 'antd'
import { useState } from 'react'

type Props = {
  children: React.ReactNode
  isModalOpen: boolean
  setIsModalOpen: (value: boolean) => void
  title: string
}
const BasicModal = ({
  children,
  isModalOpen,
  setIsModalOpen,
  title,
}: Props) => {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={() => setIsModalOpen(false)}
      onCancel={() => setIsModalOpen(false)}>
      {children}
    </Modal>
  )
}
export default BasicModal
