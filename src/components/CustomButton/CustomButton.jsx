import React from 'react'
import './CustomButton.scss'

export const CustomButton = ({onSubmit, children, ...otherProps}) => {
    return (
        <button className='custom-button'>
            {children}
        </button>
    )
}
