// src/hooks/useCounter.js
import { useState } from 'react';

export const useCounter = ({ min = -10, max = 10, initial = 0 } = {}) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < max) setCount(count + 1);
    };

    const decrement = () => {
        if (count > min) setCount(count - 1);
    };

    const reset = () => setCount(initial);

    return { count, increment, decrement, reset };
};
