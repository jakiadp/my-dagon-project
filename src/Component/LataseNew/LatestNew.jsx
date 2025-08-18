import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNew = () => {
    return (
        <div className='flex iteam-center gap-5 bg-base-200 p-4 mt-4'>
            <p className='bg-secondary text-base-100 px-4 py-2'>Latese</p>
            <Marquee className='' pauseOnHover={true} speed={60}>
                <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quisquam maiores ad esse cupiditate doloribus quae cum perspiciatis quibusdam aperiam pariatur enim vel error praesentium voluptatem, nemo dolore molestiae qui!</p>
            </Marquee>
        </div>
    );
};

export default LatestNew;