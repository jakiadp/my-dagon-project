import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Component/Header/Header';
import LatestNew from '../../Component/LataseNew/LatestNew';
import Navber from '../../Component/Navber';
import LeftAside from '../../Component/HomeLayout/LeftAside';
import RifgtAside from '../../Component/HomeLayout/RifgtAside';

const HomeLoyout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                
                <section className='w-11/12 mx-auto'>
                    <LatestNew></LatestNew>
                </section>
                <nav className='w-11/12 mx-auto'>
                    <Navber></Navber>
                </nav>
            </header>

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 mt-10 gap-5'>
                <aside className='col-span-3 sticky top- h-fit'>
                    <LeftAside></LeftAside>
                </aside>
               
                 <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>

                <aside className='col-span-3  sticky top- h-fit'>
                    <RifgtAside></RifgtAside>
                </aside>
           
            </main>
        </div>
    );
};

export default HomeLoyout;