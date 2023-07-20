import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useCallback, useState } from 'react'
import ImageZoom from '../components/imageZoom'
import Slick from 'react-slick'

interface data {
  src: string
}
type Props = { images: Array<data> }

const PostImages = ({ images }: Props) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false)

  const onClose = useCallback(() => {
    setShowImagesZoom(false)
  }, [])

  const onZoom = useCallback(() => {
    setShowImagesZoom(true)
  }, [])
  console.log(images)
  if (images.length === 1) {
    return (
      <div
        style={{
          paddingTop: 20,
          display: 'flex',
          justifyContent: 'center',
          maxHeight: 400,
        }}>
        <img
          role='presentation'
          style={{ borderRadius: 20, width: '95%' }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
      </div>
    )
  }
  if (images.length === 2) {
    return (
      <div
        style={{
          display: 'flex',
          paddingTop: 20,
          justifyContent: 'center',
          gap: 15,
        }}>
        <img
          role='presentation'
          style={{ width: '45%', borderRadius: 20 }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
        <img
          role='presentation'
          style={{ width: '45%', borderRadius: 20 }}
          src={images[1].src}
          alt={images[1].src}
          onClick={onZoom}
        />
      </div>
    )
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      {/* // when images are more than 3 */}
      <div
        style={{
          display: 'flex',
          paddingTop: 20,
          justifyContent: 'center',
          gap: 15,
        }}>
        <img
          role='presentation'
          style={{ width: '45%', borderRadius: 20 }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <div
          role='presentation'
          style={{
            width: '45%',
            textAlign: 'center',
            verticalAlign: 'middle',
            alignSelf: 'center',
          }}
          onClick={onZoom}>
          <div>
            <PlusOutlined color='blue' />
          </div>
          <span style={{ color: '#1677ff' }}>
            Click to see {images.length - 1} more photos
          </span>
          <br />
        </div>
        {/* TODO: customize CSS */}
        {/* {showImagesZoom && <ImageZoom images={images} onClose={onClose} />} */}
      </div>
    </>
  )
}
export default PostImages
