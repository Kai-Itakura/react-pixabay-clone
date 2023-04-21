import './ImageGallery.css'
import React from 'react'

const ImageGallery = ({ fetchData }) => {
  return (
    <div>
      <div className='images-wrapper'>
        {fetchData.map((data) => (
          <div className='image' key={data.id}>
            <a href={data.pageURL} target='_blank' rel='noreferrer noopener'>
              <img src={data.largeImageURL} alt='' />
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
