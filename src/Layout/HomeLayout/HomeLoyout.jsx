import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Component/Header/Header';
import LatestNew from '../../Component/LataseNew/LatestNew';
import Navber from '../../Component/Navber';

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
            <main>
               
                <section className='left-nav'></section>
                <section className='main'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default HomeLoyout;