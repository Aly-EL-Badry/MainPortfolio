import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
// import './Lay.css';
import { AiOutlineArrowUp } from 'react-icons/ai';

function Lay() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            {isVisible && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <AiOutlineArrowUp />
                </button>
            )}
        </>
    );
}

export default Lay;
