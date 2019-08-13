import React, { Component } from 'react';


const CheckBox = ({ label, isSelected, onCheckBoxChange }) => (
    <div className='form-check'>
        <label>
            <input
                type='checkbox'
                name={label}
                checked={isSelected}
                onChange={onCheckBoxChange}
                className='form-check-input'
            />
            {label}
        </label>
    </div>
);

export default CheckBox;