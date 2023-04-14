import React from 'react'
import { useState } from 'react'
import RequestForm from './RequestForm'

export default function HomeStartImage() {
    const [showRequestForm, setShowRequestForm] = useState(false)

    const handleOpenRequestForm = () => {
        setShowRequestForm(true)
    }

    const handleCloseRequestForm = () => {
        setShowRequestForm(false)
    }

    return (
        <div>
            <div className='home-image-container'>
                <img src='navbar_omar.jpeg' className='home-image' />
                <div className='home-image-text'>
                    <h1 className='header-homeStartImage'>Inspiration som berör</h1>
                    <h2 className='underHeader-homeStartImage'>Ta ditt event till nya höjder</h2>
                    <button onClick={handleOpenRequestForm}>Skicka förfrågan</button>
                    {showRequestForm && <RequestForm handleCloseRequestForm={handleCloseRequestForm}/>}
                </div>  
            </div>
        </div>
    )
}
