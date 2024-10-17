import PopularProductCard from '../components/PopularProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion'
import { arrowLeft, arrowRight } from "../assets/icons";
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const PopularProducts = () => {

  const items = useSelector((state) => state.cart)

  const swiperRef = useRef(null);
  const [isLastSlide, setIsLastSlide] = useState(false); 
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin font-bold text-4xl">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="font-montserrat text-slate-gray text-lg leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis ex quam aut consequuntur modi aspernatur voluptates tenetur officiis fugit? Impedit ipsam dolores, nulla enim doloremque suscipit corporis maxime sunt.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="mt-16 relative">
        <div className='flex items-center right-3 absolute z-10 -top-12'>
        <motion.img src={arrowLeft} 
        whileHover={{scale: 1.2}}
     transition={{ type: 'ease', stiffness: 300, duration: 0.3 }}
    className='ml-2 rounded-full w-10 h-10'
    onClick={() => swiperRef.current.slidePrev()}
    />
        <motion.img src={arrowRight} 
        whileHover={{scale: 1.2}}
     transition={{ type: 'ease', stiffness: 300, duration: 0.3 }}
    className={`ml-2 rounded-full w-10 h-10 ${isLastSlide ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
    onClick={() => !isLastSlide && swiperRef.current.slideNext()}
    />
        </div>
        <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
      }}
          spaceBetween={20} // Spacing between slides
          slidesPerView={1} // How many slides visible at a time
          breakpoints={{
            640: { slidesPerView: 2 }, // 2 slides on screens >= 640px
            768: { slidesPerView: 3 }, // 3 slides on screens >= 768px
            1024: { slidesPerView: 4 } // 4 slides on screens >= 1024px
          }}
          modules={[Pagination]} // Importing Pagination
          onSlideChange={(swiper) => {
            // Check if the current slide is the last slide
            setIsLastSlide(swiper.isEnd);
          }}
          onReachEnd={() => setIsLastSlide(true)}
          onReachBeginning={() => setIsLastSlide(false)}
          className='pt-4'
        >
          {/* Map through products and render each inside a SwiperSlide */}
          {items.item.map((product) => (
            <SwiperSlide key={product.id}>
              <PopularProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularProducts;
