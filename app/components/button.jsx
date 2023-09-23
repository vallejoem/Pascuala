import React from 'react';

const ButtonBuy = ({ label, linkTo }) => {
  return (
    <a className="bg-blue-700 text-center hover:bg-blue-500 text-white font-bold py-2 px-4 rounded" href={linkTo}>
      {label}
    </a>
  );
};

export default ButtonBuy;

