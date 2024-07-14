import React from 'react';
import './sponsors.css';

const Sponsors = () => {

    return(
        <>
        <h1 className='header text-white font-bold text-8xl flex flex-col justify-center items-center h-52'>Organised by</h1>
        <div className='flex flex-row justify-center items-center gap-48'>
        <img src="favicon.ico" alt=""  className='h-60'/>
        <img src="chitkaralogo.png" alt="" className='h-60' />
        </div>
        </>
    )
}

export default Sponsors;