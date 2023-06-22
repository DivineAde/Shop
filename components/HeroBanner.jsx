import Link from 'next/link'
import { useEffect } from 'react';
import React from 'react'
import { urlFor } from '@/lib/client'
import MeshGradient from 'mesh-gradient.js';

const COLORS =   ["#eb75b6",
"#ddf3ff",
"#6e3deb",
"#c92f3c"]


const HeroBanner = ({ heroBanner }) => {
  


  return (
    <div className='hero-banner-container'>
      <div className=''>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3 className='mid-text'>{heroBanner.midText}</h3>
        <h1 className='hero-lg'>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)}  className='hero-banner-image bounce' alt='headphones/img' />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
           <button type='button'>{heroBanner.buttonText}</button>
          </Link>
          <div className='desc'>
            <h5>{heroBanner.product}</h5>
            <p>{heroBanner.smallText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
