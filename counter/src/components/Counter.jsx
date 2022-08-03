import React from 'react';
import '../stylesheets/Counter.css';

export function Counter({ clicks }) {
    return (
        <div className="counter" data-testid="counter">
            { clicks }
        </div>
    )
};