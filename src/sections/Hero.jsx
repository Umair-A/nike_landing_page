import React, { useState } from 'react';
import Button from '../Components/Button';
import iconURl from '../assets/icons/arrow-right.svg';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from '../assets/images';
import ShoesCard from '../Components/ShoesCard';

const Hero = () => {
  const [ bigShoeImage, setBigShoeImage ] = useState(bigShoe1);
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>Our summer collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max:sm:text-[72px] max-sm:leading-[82] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The new arrival</span><br />
          <span className='text-coral-red inline-block mt-3'> nike </span> shoes
        </h1>
        <p className='text-slate-gray mt-5 mb-14 text-lg sm:max-w-sm'>Discover stylish nike arrivals, comfort for your active life</p>
        <Button label="Shop now" iconURl={iconURl}/>
        <div className='flex justify-start items-start flex-wrap w-full gap-16 mt-20'>
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className='text-4xl font-planquin font-bold'>{stat.value}</p>
              <p className='text-slate-gray leading-7 font-montserrat'>{stat.label}</p>
            </div>
          ))}
        </div>
       </div>
       <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img 
          src={ bigShoeImage } 
          alt='big-shoe'
          width={610}
          height={500}
          className='object-contain'
        />
        <div className='flex absolute gap-4 sm:gap-6 -bottom-[10%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoesCard
                imageURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
       </div>
    </section>
  )
}

export default Hero