import { Input } from 'antd'
import React, { useState } from 'react'
import styled from 'styled-components'
import BasicModal from '../components/modal/BasicModal'
type Props = {
  title: string
  header: string
  follow: number
}
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`

const Follow = ({ title, header, follow }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  console.log('number of follow', follow)
  return (
    <>
      <div onClick={() => setIsModalOpen(true)}>
        <div key={header}>
          {header}
          <br />
          <span>{follow}</span>
        </div>
      </div>
      <BasicModal
        title={title}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}>
        <SearchInput
          placeholder='Search'
          allowClear
          size='large'
          enterButton
          // onSearch={onSearch}
        />
        {header}
      </BasicModal>
    </>
  )
}
export default Follow
