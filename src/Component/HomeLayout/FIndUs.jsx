import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FIndUs = () => {
    return (
        <div className='mt-5 mb-5'>
            <h1 className='font-bold  mb-5 '>Find Us</h1>
            <div className="join join-vertical w-full">
  <button className="btn bg-base-100 justify-start  join-item"> <FaFacebook></FaFacebook> Facebook</button>
  <button className="btn bg-base-100 justify-start  join-item"> <FaTwitter></FaTwitter>  Twitter</button>
  <button className="btn bg-base-100 justify-start  join-item"> <FaInstagram></FaInstagram> Instagrame</button>
</div>
        </div>
    );
};

export default FIndUs;