import React from 'react'
import '../css/Counter.css'

export const Counter = ({ clickNumber }) => {
    return (
        <div className='counter-section'>
            { clickNumber }
        </div>
    )
}
