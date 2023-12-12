import React from 'react';

const AddCart = ({ label, linkTo }) => {
    return (
        <a className="bg-blue-200 text-center hover:bg-blue-300 text-indigo-700 font-bold py-2 px-4 rounded" href={linkTo}>
            {label || 'Ok'}
        </a>
    );
};

export default AddCart;