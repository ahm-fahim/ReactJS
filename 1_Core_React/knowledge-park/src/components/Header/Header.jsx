import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='flex flex-row justify-around bg-gray-100 py-5 rounded-lg'>
                <h1 className='font-anton text-2xl text-gray-900'>Knowledge Park</h1>
                <button className='bg-gray-900 text-white px-4 rounded-full font-bold'>Blog</button>
            </div>
        </div>
    );
};

export default Header;