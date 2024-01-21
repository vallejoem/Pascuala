import React from 'react';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wapp = () => {
    return (
        <a className="bg-green-100 text-center text-green-600 hover:text-green-400  font-bold py-2 px-4 rounded-full" href="https://api.whatsapp.com/send?phone=5492233023017">
            <FontAwesomeIcon className='text-green-600' size='3x' icon={faWhatsapp} />
        </a>
    );
};

export default Wapp;