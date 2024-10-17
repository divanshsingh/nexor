import {nexor} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'
import { motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'

const Nav = () => {

  const {cart} =  useSelector((state) => state.cart)


  return (
    <div>
      <header className='padding-x py-5 z-10 w-full absolute'>
        <nav className='flex justify-between items-center max-container'>
          <a href="/">
          <img src={nexor} alt="nexor" 
          width={100}
          height={25}
          className='mix-blend-multiply'
          />
          </a>
          <ul className='flex justify-center items-center gap-8 px-1 py-1 absolute left-[65%]'>
            {navLinks.map((item)=>(
              <li key={item.label}>
                <motion.a href={item.href}
                className="font-montserrat leading-normal text-black hidden xl:block"
                initial="rest"
        whileHover="hover"
        animate="rest"
                >
                  {item.label}
                  <motion.div
          className="underline"
          variants={{
            rest: { width: '0%', opacity: 0 },
            hover: { width: '100%', opacity: 1, transition: { duration: 0.3 } },
          }}
          style={{
            height: '2px',
            backgroundColor: 'black',
            marginTop: '2px',
          }}
        />
                </motion.a>
              </li>
            ))}
            <li>
          <Link to={'/cart'}>      
      <div className='relative'>
            <div className='bg-black rounded-full w-[20px] h-[20px] text-white flex justify-center items-center absolute -right-2 -top-3 text-sm'>
            <p>{cart.length}</p>
            </div>
          <IoCartOutline className='text-3xl'/>
          </div>
      </Link>
            </li>
          </ul>
            <FiMenu className='xl:hidden text-2xl' />
          <div className='hidden max-lg:block'>
            <img src={hamburger} alt="menu" width={25} height={25}/>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
