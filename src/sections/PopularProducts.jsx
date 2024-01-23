import React from 'react';
import { products } from '../constants';
import PopularProductCard from '../Components/PopularProductCard';

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
        <div className='flex flex-col justify-start gap-5'>
            <h2 className='font-palanquin font-bold text-4xl'>Our 
                <span className='text-coral-red'> Popular</span> Products</h2>
            <p className='text-slate-gray font-palanquin lg:max-w-lg mt-2'>Experience top notch quality and style with our sought-after collection. Discover a world of comfort, design and style.</p>

        </div>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm-gap-4 gap-14'>
            {products.map((product) => (
                <PopularProductCard key={products.name} {...product} />
            ))}
        </div>
    </section>
  )
}

export default PopularProducts;