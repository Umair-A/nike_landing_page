import React from 'react';

const ShoesCard = ({imageURL, changeBigShoeImage, bigShoeImage}) => {
    const handleClick = () => {
        if(bigShoeImage !== imageURL.bigShoe){
            changeBigShoeImage(imageURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${bigShoeImage === imageURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
    >
        <div className='flex justify-center items-center bg-card bg-cover bg-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img 
                src={imageURL.thumbnail}
                alt='Shoe-collection'
                width={127}
                height={103}
                className='object-contain'
            />
        </div>

    </div>
  )
}

export default ShoesCard;
