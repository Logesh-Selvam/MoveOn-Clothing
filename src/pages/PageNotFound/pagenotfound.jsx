import React from 'react'
import './pagenotfound.css'
import video from '../../assets/Error.png'

const pagenotfound = () => {
  return (
    <div>
        <h1 className='PAge'>We can't seem to find the page you are looking for...</h1>
      <img src="NOT FOUND PAGES" width={519} height={389} alt={video} />
    </div>
  )
}

export default pagenotfound
