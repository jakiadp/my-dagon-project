import React, { useEffect, useState } from 'react';
import Header from '../Component/Header/Header';
import RifgtAside from '../Component/HomeLayout/RifgtAside';
import NewsDetailsCard from '../Component/HomeLayout/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => { 
    const data = useLoaderData();
    const {id} =useParams();
    const [news, setNews] = useState({});


    // console.log(data,id, news);

    useEffect(()=>{

        const NewsDetails = data.find((singleNews)=> singleNews.id == id );
        setNews(NewsDetails);
    },[data,id])
    return (
        <div>
           <header className='py-3'>
            <Header></Header>
           </header>
           <main className='gap-5 py-10 w-11/12 mx-auto grid grid-cols-12 '>
            <section className='col-span-9 '>
                <h2 className='font-bold mb-5'>News Details</h2>
                <NewsDetailsCard news={news}></NewsDetailsCard>
            </section>
            <aside className='col-span-3'>
              <RifgtAside></RifgtAside>
            </aside>
            
           </main>
        </div>
    );
};

export default NewsDetails;