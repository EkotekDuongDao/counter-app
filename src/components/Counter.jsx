// src/components/Counter.jsx
import React from 'react';
import { useCounter } from '../hooks/useCounter';

const Counter = ({ onChange }) => {
    const { count, increment, decrement, reset } = useCounter();

    const handle = (fn) => () => {
        fn();
        if (onChange) onChange(count); // callback mỗi khi thay đổi
    };

    return (
        <div>
            <h2 data-testid="count" aria-label="counter">Count: {count}</h2>
            <button onClick={handle(increment)} data-testid="increment">Increment</button>
            <button onClick={handle(decrement)} data-testid="decrement">Decrement</button>
            <button onClick={handle(reset)} data-testid="reset">Reset</button>
        </div>
    );
};

export default Counter;
