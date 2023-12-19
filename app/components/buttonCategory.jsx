import React from 'react';
import { Borel } from 'next/font/google';


const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})


const ButtonCategory = ({ label }) => {
  return (
    <a className={`${borel.className} pt-3 text-xl m-3 font-bold tracking-tight text-fuchsia-950 hover:text-fuchsia-700`}>
      {label}
    </a>
  );
};

export default ButtonCategory;