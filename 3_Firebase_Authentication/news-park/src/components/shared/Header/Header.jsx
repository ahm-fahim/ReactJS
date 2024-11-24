import React from 'react';
import moment from 'moment';
import BreakingNews from '../BreakingNews/BreakingNews';

const Header = () => {
    return (
        <div className='text-center py-4'>
            <h1 className="text-6xl font-bokor ">News Park</h1>
            <h3 className="text-xl py-2 text-gray-500">Journalism Without Fear or Favour</h3>
            <p className='text-lg text-gray-600'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            <BreakingNews/>
        </div>
    );
};

export default Header;