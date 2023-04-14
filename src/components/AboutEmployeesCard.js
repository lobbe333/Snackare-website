import React from 'react'
import '../styles/Card.css'

export default function AboutEmployeesCard({ employee }) {

    return (
        <div>
            <div className='card'>
                <div className='card-front'>
                    <div className='card-information'>
                        <img src='love.png' className='card-image' alt={employee.name} />
                        <div className='name-and-roles-container'>
                            <h2 className='name'>{employee.name}</h2>
                            <div className='roles-container'>{employee.role}</div>
                        </div>
                    </div>
                </div>
                <div className='card-back' style={{ backgroundImage: `url(${"love.png"})` }}>
                    <div className='card-information-back'>
                        <h2 className='name'>{employee.name}</h2>
                        <div className='topics-container'>
                            <p>{employee.email}</p>
                            <p>{employee.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
