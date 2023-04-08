'use client'

import { FaRegComment } from 'react-icons/fa';
import { TiArrowForwardOutline } from 'react-icons/ti';

const Comments = () => {

  return (
    <div className='flex gap-2 justify-between sm:gap-10 sm:justify-start'>
      <div className='cursor-pointer flex items-center justify-center gap-2 opacity-90'>
        <FaRegComment className='text-gray-300 text-base'/>
        <span className='text-gray-400 text-sm'>20 comentarios</span>
      </div>
      <div className='cursor-pointer flex items-center justify-center gap-2'>
        <TiArrowForwardOutline className='text-gray-300 text-xl opacity-90'/>
        <span className='text-gray-400 opacity-80 text-sm'>Compartilhar</span>
      </div>
    </div>
  )
}

export default Comments