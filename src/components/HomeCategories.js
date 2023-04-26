import { React, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Speakers from './Speakers';


export default function HomeCategories() {
    const [category, setCategory] = useState("")
    const navigate = useNavigate()

    const handleCategory = (category) => {
        setCategory(category);
        navigate('/forelasare', { state: { category } });
    };

    const handleAllSpeakersClick = () => {
        navigate('/forelasare')
    }


    console.log("HomeCategories.js " + category)

    return (
        <div>
            <div className='home-categories-container'>
                <h1 className='categories-header'>Våra Snackare</h1>
                <div className='categories' data-aos='fade-down'>
                    <div className='category category-forelasare' onClick={() => handleCategory('lecturer')}>
                        <h2 className='category-header'>Föreläsare</h2>
                    </div>
                    <div className='category category-moderator' onClick={() => handleCategory('moderator')}>
                        <h2 className='category-header'>Moderatorer</h2>
                    </div>
                    <div className='category category-underhallare' onClick={() => handleCategory('entertainer')}>
                        <h2 className='category-header'>Underhållare</h2>
                    </div>
                </div>
                <button data-aos='fade-up' onClick={handleAllSpeakersClick}>Se alla Snackare</button>
            </div>
        </div>
    )
}
