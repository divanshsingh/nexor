import React from 'react'
import { motion } from 'framer-motion'

const Button = ({lable, iconUrl, backgroundColor, textColor, borderColor, onClick}) => {
  return (
   <motion.button
   onClick={onClick}
   whileHover="hover"
   variants={{
    hover: { scale: 1.05 },
  }}
   className={`flex justify-center items-center gap-2 px-[1rem] md:px-7 py-4 font-montserrat text-lg leading-none border-2
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : "bg-coral-red text-white border-coral-red"}
   rounded-full`}>
    {lable}
    {iconUrl && (<motion.img src={iconUrl} 
     variants={{
      hover: { x: 10 },
    }}
     transition={{ type: 'ease', stiffness: 300, duration: 0.5 }}
    className='ml-2 rounded-full w-5 h-5'
    />)}
    </motion.button>
  )
}

export default Button
