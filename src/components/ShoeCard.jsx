import React from 'react'

const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImg}) => {

    const handleClick = ()=>{
        if(bigShoeImg !== imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
  return (
    <div className={`rounded-xl max-sm:flex-1 cursor-pointer`}
    onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-[#dfdfdf] bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgUrl.thumbnail}
        width={127}
        height={103}
        className='object-contain'
        />
      </div>
    </div>
  )
}

export default ShoeCard
