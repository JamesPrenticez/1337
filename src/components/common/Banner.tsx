import React, {type ReactElement} from 'react'

interface BannerProps {
  image: {
    src: string;
    alt: string;
  }
}

const Banner = ({image}: BannerProps):ReactElement => {
  return (
    <img 
      className="w-full h-60 object-cover"
      src={image.src}
      alt=''
    />
  )
}

export default Banner


