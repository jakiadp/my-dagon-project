import React, { use } from 'react';
import { NavLink } from 'react-router';
const CaregoryPromise = fetch("/categories.json").then((res) =>
res.json());

const Categoris = () => {
    const categories = use(CaregoryPromise)
    return (
        <div>
            <h1 className='font-bold'>all categories({categories.length})</h1>

            <div className='grid grid-cols-1 mt-5 gap-3 '>
                {
                    categories.map((category) =>(
                        <NavLink key={category.id}  to={`/category/${category.id}`}  
                         className='btn bg-base-100  border-0 hover:bg-base-200 font-semibold text-accent '>{category.name}</NavLink>
                    ))
                }
            </div>
            
        </div>
    );
};

export default Categoris;