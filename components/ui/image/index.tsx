'use client'

import { useState } from 'react'
import Image from 'next/image'

interface MyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

function ImageProfile({ src, alt, width, height, className }: MyImageProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <>
      {!imageError && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onError={() => setImageError(true)}
        />
      )}
    </>
  )
}

export default ImageProfile;