import { Modal } from 'antd'
import { useCallback } from 'react'

type Props = {
  children: React.ReactNode
  isModalOpen: boolean
  setIsModalOpen: (value: boolean) => void
  title: string
  logoutHandler?: () => void
  isLogout?: boolean
}
const BasicModal = ({
  children,
  isModalOpen,
  setIsModalOpen,
  title,
  logoutHandler,
  isLogout,
}: Props) => {
  const okHandler = useCallback(() => {
    if (isLogout) {
      logoutHandler()
    }
    setIsModalOpen(false)
  }, [isLogout])

  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={okHandler}
      onCancel={() => setIsModalOpen(false)}>
      {children}
    </Modal>
  )
}
export default BasicModal
