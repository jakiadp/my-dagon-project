import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news);
    return (
        <div className='space-y-5'>
            <img className='w-full  h-[350] object-cover ' src={news.image_url} alt="" />
            <h1 className='font-bold text-2xl text-primary'>{news.title}</h1>
            <p>{news.details}</p>
            <Link to={`/category/${news.category_id}`} className='btn btn-secondary'>Go to Category</Link>
        </div>
    );
};

export default NewsDetailsCard;