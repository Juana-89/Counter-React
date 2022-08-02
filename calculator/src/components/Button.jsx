import React from 'react';
import '../stylesheets/Button.css';

export function Button ({ text, clickButton, handleClick }) {
    return(
        <button className={clickButton ? 'button-click' : 'button-reset'}
        onClick={handleClick}>
        {text}
        </button>
    )
};
