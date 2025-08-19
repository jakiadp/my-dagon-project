import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams,  } from 'react-router';
import NewsCard from '../Component/HomeLayout/NewsCard';

const CaregoryNews = () => {

    const { id } = useParams();
    const data =useLoaderData();
    // console.log(id,data)

const [ categoryNews, setcategoryNews ] = useState([]); 


    useEffect(() => {

        if(id == "0"){
            setcategoryNews(data);
            return;
        }
        else if(id == "1"){
            const filterNews = data.filter((news)=> news.others.is_today_pick == true);

            setcategoryNews(filterNews);
        }
        
        
        else{
            const filterNews = data.filter((news) => news.category_id == id);
            console.log(filterNews);

            setcategoryNews(filterNews);
        }

        // const filterNews = data.filter((news)=> news.category_id == id);
        // console.log(filterNews);

        // setcategoryNews(filterNews);
    },[data,id]);
    return (
        <div>
            <h1 className='font-bold mb-5'>Total  <span className='text-secondary'>{categoryNews.length} </span> news found </h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                     categoryNews.map((news)=>(
                        <NewsCard key={news.id} news={news}></NewsCard>
                     ))
                }
            </div>
        </div>
        
    );
};

export default CaregoryNews;