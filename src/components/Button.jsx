import React from 'react';

const Button = ({ children }) => {
    return (
        <button className='bg-[#cc3333] text-white px-[25px] py-[10px] transition-colors duration-300 border-none outline-none rounded-[3px] hover:bg-[#1c1c22]'>
            {children}
        </button>
    );
};

export default Button;