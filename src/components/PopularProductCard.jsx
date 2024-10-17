import { Link, useParams } from 'react-router-dom'
import {star} from '../assets/icons'
import { motion } from 'framer-motion'

const PopularProductCard = ({imgURL, name, price, url}) => {

  const {id} = useParams()
  return (
    <Link to={`/product/${url}`}>
    <div className='flex flex-1 flex-col w-full max-sm:w-full items-center justify-center between-lg-md:scale-[73%]'>
      <div>  
        <motion.div className='bg-[#F6F6F6] rounded-3xl flex w-[18rem] justify-center items-baseline' whileHover="hover">
      <motion.img src={imgURL} alt={name} loading="lazy" className='w-[15rem] h-[20rem] drop-shadow-[0_30px_35px_#0004]'
      variants={{
        hover: {scale: 1.05}
      }}
      transition={{
        type: "ease", duration: 0.3 
      }}
      />
      </motion.div>
      <div className="mt-8 flex gap-2.5 justify-start">
        <img src={star} loading="lazy" alt="rating" width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>(4.5)</p>
      </div>
      <h3 className='font-palanquin text-2xl font-semibold leading-normal mt-2'>{name}</h3>
      <p className='font-palanquin text-coral-red text-2xl font-bold mb-4'>{price}</p>
      </div>
    </div>
    </Link>
  )
}

export default PopularProductCard
