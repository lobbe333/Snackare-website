import React, { useEffect } from 'react';
import '../styles/Home.css'
import HomeCategories from './HomeCategories'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HomeStartImage from './HomeStartImage';
import HomeClients from './HomeClients';



export default function Home({ handleCategory }) {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animate only once when the element is in the viewport
        });
    }, []);

    // ...

return (
    <div className='background'>
        <HomeStartImage />
        <HomeCategories/>
        <HomeClients />
    </div>
)
}
