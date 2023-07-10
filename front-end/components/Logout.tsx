import { Button } from 'antd'
import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import BasicModal from '../components/modal/BasicModal'
import { logoutAction } from '../reducers/user'

type Props = {}
const Logout = () => {
  const dispatch = useDispatch()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const logoutHandler = useCallback(() => {
    dispatch(logoutAction())
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
