import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { IoMdShare } from 'react-icons/io';
import { IoBookmarkOutline } from 'react-icons/io5';
import { Link } from 'react-router';

const NewsCard = ({news}) => {
     const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  const formattedDate = new Date(news.author.published_date).toLocaleDateString();
    return (
          <div className="card bg-base-100 shadow-xl my-5 ">
      {/* Author Section */}
      <div className="flex items-center p-4 border-b border-gray-200 bg-base-200  justify-between">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <button className='flex gap-2'>
            <IoBookmarkOutline size={20} />
            <IoMdShare  size={20}/>
        </button>
      </div>

      {/* Content */}
      <div className="px-4 pt-4 text-accent">
        <h2 className="card-title text-lg mb-3">{title}</h2>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-60 object-cover rounded"
        />
        <p className="mt-3 text-sm text-gray-700">
          {details.slice(0, 200)}...
          <Link to="/news-details/id" className='text-primary font-semibold cursor-pointer hover:underline'>Read More</Link>
        </p>
      </div>

      {/* Footer Section */}
      <div className="card-actions justify-between items-center px-4 py-4 border-t border-gray-200">
        <div className="flex items-center gap-2 text-yellow-500">
          <FaStar />
          <span className="text-sm font-semibold">{rating.number}</span>
          <span className="badge badge-warning text-xs">{rating.badge}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
    );
};

export default NewsCard;