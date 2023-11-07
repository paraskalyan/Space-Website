import React from 'react'

const VideoBackground = ({source, style}) => {
  return (
    <div className={`absolute w-full h-full top-0 -z-10 ${style}`} >
      <video autoPlay muted loop className="video" >
        <source src={source} type="video/mp4"></source>
      </video>  
    </div>
  )
}

export default VideoBackground