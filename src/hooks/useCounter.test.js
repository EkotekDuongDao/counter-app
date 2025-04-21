// src/hooks/useCounter.test.js
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';
import {describe, expect, test} from "vitest";

describe('useCounter Hook', () => {
    test('initial value is 0', () => {
        const { result } = renderHook(() => useCounter());
        expect(result.current.count).toBe(0);
    });

    test('increments', () => {
        const { result } = renderHook(() => useCounter());
        act(() => result.current.increment());
        expect(result.current.count).toBe(1);
    });

    test('decrements', () => {
        const { result } = renderHook(() => useCounter());
        act(() => result.current.decrement());
        expect(result.current.count).toBe(-1);
    });

    test('resets', () => {
        const { result } = renderHook(() => useCounter());
        act(() => {
            result.current.increment();
            result.current.reset();
        });
        expect(result.current.count).toBe(0);
    });

    test('respects max/min bounds', () => {
        const { result } = renderHook(() => useCounter({ min: -2, max: 2, initial: 0 }));

        act(() => {
            for (let i = 0; i < 5; i++) result.current.increment();
        });
        expect(result.current.count).toBe(1);

        act(() => {
            for (let i = 0; i < 10; i++) result.current.decrement();
        });
        expect(result.current.count).toBe(0);
    });
});
