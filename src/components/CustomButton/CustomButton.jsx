import React from 'react'
import './CustomButton.scss'

export const CustomButton = ({onSubmit, children, ...otherProps}) => {
    return (
        <div className='custom-button'>
            {children}
        </div>
    )
}
