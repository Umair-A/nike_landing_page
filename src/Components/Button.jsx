import React from 'react';

const Button = ({label, iconURl}) => {
  return (
    <button className='flex justify-center items-center gap-2 leading-none px-7 py-4 border font-montserrat text-lg bg-coral-red rounded-full text-white border-coral-red'>
      {label}

      <img src={iconURl} />
    </button>
  )
}

export default Button;