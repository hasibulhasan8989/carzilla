import React from 'react';

const Button = ({text}) => {
    return (
        <button className='block btn btn-outline my-6 px-10 mx-auto hover:bg-[#f75d34] hover:text-white transition duration-300 text-[#f75d34]'>{text}</button>
    );
};

export default Button;