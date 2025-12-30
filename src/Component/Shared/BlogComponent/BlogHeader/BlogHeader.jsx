import Image from 'next/image';
import header from '../../../../../public/Blog-Banner-01-min-2.png'
import React from 'react';

const BlogHeader = () => {
  return (
    <div>
      <div className='mx-auto px-22 container'>
        <Image src={header} width={1500} height={500} alt='header'></Image>
      </div>
    </div>
  );
};

export default BlogHeader;