import { Button } from 'antd'
import React, { useState, useCallback } from 'react'
import BasicModal from '../components/modal/BasicModal'
type Props = {
  setIsLogin: (value: boolean) => void
}
const Logout = ({ setIsLogin }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const logoutHandler = useCallback(() => {
    setIsLogin(false)
  }, [])

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)}>Logout</Button>
      <BasicModal
        title='We are sad to say goodbye, See you again!'
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        logoutHandler={logoutHandler}
        isLogout>
        Are you sure that you want to logout?
      </BasicModal>
    </>
  )
}
export default Logout
