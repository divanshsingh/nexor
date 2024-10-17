import Button from "../components/Button"
import {arrowRight} from '../assets/icons'
import { saleProduct1, saleProduct2, saleProduct3 } from '../assets/images'
import Discount from "../components/Dicount"
import { motion } from "framer-motion"

const SpecialOffer = () => {
  return (
    <section id="offers" className="flex flex-wrap items-center gap-10">
      <div className="flex flex-col gap-5 relative">
        <div className="absolute right-[3.5rem] top-[40%]">
          <Discount />
        </div>
        <div className="flex w-[80%] items-center gap-2 justify-between">
          <motion.div whileHover="hover"
          className="bg-[#F6F6F6] w-[250px] md:w-[300px] h-[350px] md:h-[400px] rounded-3xl overflow-hidden">
          <motion.img src={saleProduct1} alt="sale product 1" loading="lazy" variants={{
            hover:{scale:1.05}
          }}
          transition={{
            type: "ease", duration: 0.3 
          }}/>
          </motion.div>
          <motion.div className="w-[250px] md:w-[300px] h-[350px] md:h-[400px] bg-[#F6F6F6] rounded-3xl overflow-hidden"
          whileHover="hover"
          >
          <motion.img src={saleProduct2} alt="sale product 2" loading="lazy" 
          variants={{
            hover:{scale:1.05}
          }}
          transition={{
            type: "ease", duration: 0.3 
          }}/>
          </motion.div>
        </div>
        <div className="w-[80%] h-[300px]">
          <motion.div className="bg-[#F6F6F6] rounded-3xl h-[300px] overflow-hidden" whileHover="hover">
            <motion.img src={saleProduct3} alt="sale product 3" loading="lazy" className="object-contain w-full h-full"
            variants={{
              hover:{scale:1.05}
            }}
            transition={{
              type: "ease", duration: 0.3 
            }}
            />
          </motion.div>
        </div>
      </div>
      <div className="flex felx-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg "><span className="text-coral-red">Speacial</span> Offer</h2>
        <p className="font-montserrat lg:max-w-lg mt-4 info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="font-montserrat lg:max-w-lg mt-4 info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button lable="Shop Now" iconUrl={arrowRight}/>
          <Button lable="Learn More" backgroundColor="bg-white" borderColor="border-coral-red" textColor="text-slate-gray"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
