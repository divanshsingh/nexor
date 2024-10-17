import { motion } from "framer-motion";

const Discount = () => {

    let offer = "You can get the offer from Nexor"
    return (
        <div className="circle w-[200px] h-[200px] bg-[white] text-black rounded-full relative flex items-center justify-center">
            <div className="logo w-[120px] h-[120px] bg-black rounded-full absolute flex justify-center items-center">
              <p className="text-white font-montserrat text-2xl">30% <br />OFF</p>
            </div>
                <motion.div className="text absolute w-[100%] h-[100%] text-[white]"
                animate={{
                    rotate: 360
                }}
                transition={{
                    duration:12, ease: "linear", repeat:Infinity
                }}
                >
                    {
                    offer.split("").map((letter, i)=>{
                        return(
                            <span key={i}
                            style={{ transform: `rotate(${i * 11}deg)`}}
                            className="absolute left-[50%] origin-[0_100px] text-xl text-black">{letter}</span>
                        )
                    })
                    }
                </motion.div>
            </div>
      );
};

export default Discount;
