import React, { useState } from 'react'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import toast from 'react-hot-toast'


const Product = () => {

  const items = useSelector((state) => state.cart)
  const dispatch = useDispatch();
    const {url} = useParams();

    const product = items.item.find((item) => item.url === url);

    if(!product){
        return <h3>Product not found</h3>
    }

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedThumbnailImg, setSelectedThumbnailImg] = useState('');
    const [selectedImg, setSelectedImg] = useState(product.productImg1)

    const sizes = [6, 7, 8, 9, 10]; // Available sizes
    
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
        dispatch(setSize(size)); // Update the selected size
      };

      const handleImgSelect = (img)=>{
        setSelectedImg(img)
        setSelectedThumbnailImg(img)
      }

  return (
    <div className="min-h-[120vh] screen bg-white">
      <div className="w-full flex lg:flex-row flex-col justify-center gap-10 max-container pt-[110px] md:padding-x">

        {/* {Product Visuals} */}
        <div className="w-[100%] md:w-[50%] h-[82vh] rounded-3xl flex justify-center items-center overflow-hidden flex-col">
          <div className='padding-x md:p-0'>
          <img
            src={selectedImg}
            alt={product.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          </div>
        </div>
          <div className='productThumbnail absolute md:left-10 md:top-[5%] flex md:flex-col bottom-[4%] w-[100%] md:w-auto justify-center gap-4 md:gap-1'>
          <img
            src={product.productImg1}
            alt={product.name}
            className={`w-[80px] h-[80px] object-cover border-2 rounded-md mt-2 ${
                selectedThumbnailImg === product.productImg1 ? "border-coral-red" : "border-gray-300"
              }`}
              loading="lazy"
            onClick={() => handleImgSelect(product.productImg1)}
          />
          <img
            src={product.productImg2}
            alt={product.name}
            className={`w-[80px] h-[80px] object-cover border-2 rounded-md mt-2 ${
                selectedThumbnailImg === product.productImg2 ? "border-coral-red" : "border-gray-300"
              }`}
              loading="lazy"
            onClick={() => handleImgSelect(product.productImg2)}
          />
          <img
            src={product.productImg3}
            alt={product.name}
            className={`w-[80px] h-[80px] object-cover border-2 rounded-md mt-2 ${
                selectedThumbnailImg === product.productImg3 ? "border-coral-red" : "border-gray-300"
              }`}
              loading="lazy"
            onClick={() => handleImgSelect(product.productImg3)}
          />
          </div>

        {/* {Product Descriptions} */}
        <div className="w-[100%] md:w-[50%] padding-x md:p-0">
          <div className='flex justify-between items-center absolute top-[20%] md:top-0 md:relative gap-[3rem] md:gap-0'>
          <h1 className="text-3xl font-bold font-palanquin">
            {product.name}
          </h1>
          </div>
          <p className="text-sm font-montserrat text-coral-red">
            Our Premium Collection
          </p>
          <p className="text-gray-700 mt-6">
            {product.description}
          </p>

          {/* Pricing and Availability */}
          <div className="product-pricing mt-6">
            <span className="text-2xl font-bold">{product.price}</span>
            <span className="text-green-600 ml-4">In Stock</span>
          </div>

          {/* Size Info */}
          <div className="product-size mt-6">
            <span className="font-semibold text-gray-700">Size:</span>
            <div className="flex gap-1 mt-2">
              {sizes.map((size) => (
                <div
                  key={size}
                  className={`size-box border-2 cursor-pointer p-2 rounded-md text-center transition duration-300 
                    ${
                      selectedSize === size ? "border-coral-red" : "border-gray-300"
                    }`}
                  onClick={() => handleSizeSelect(size)} // Set selected size on click
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* {Specifications} */}
          <div className='mt-6 hidden md:block'>
            <h2 className='text-md font-bold font-palanquin'>Details</h2>
            <ul className="product-info-list">
              <li className='text-gray-700 mt-2 font-montserrat text-sm'>Upper Material: Breathable mesh for improved airflow</li>
              <li className='text-gray-700 mt-2 font-montserrat text-sm'>
                Sole Material: Lightweight rubber for superior traction
              </li>
              <li className='text-gray-700 mt-2 font-montserrat text-sm'>Weight: 250 grams for a lightweight feel</li>
              <li className='text-gray-700 mt-2 font-montserrat text-sm'>
                Cushioning: Responsive EVA midsole for enhanced comfort
              </li>
              <li className='text-gray-700 mt-2 font-montserrat text-sm'>Closure Type: Lace-up design for a secure fit</li>
            </ul>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-4 bottom-4 mb-[1.5rem] md:mb-0 mt-[1.5rem] md:mt-[9rem]">
            <Button lable="Add to Cart" iconUrl={arrowRight}
            onClick={() => {
              if(!selectedSize){
                alert("Please select a size");
                return;
              }
              dispatch(addToCart({...product, selectedSize}))
              toast.success(`${product.name} added to cart`)
            }}
            />
            <Link to={'/cart'}>
            <Button
              lable="Items in Cart"
              backgroundColor="bg-white"
              borderColor="border-coral-red"
              textColor="text-slate-gray"
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product
