import Image from 'next/image'
import React from 'react'

const Contacts = ({name, src}) => {
  return (
        <div className="flex items-center">
              <Image 
              src={src}
              height={40}
              width={40}
              className="rounded"
              />
        </div>
  )
}

export {Contacts}