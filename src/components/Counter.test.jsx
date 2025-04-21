import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter Component', () => {
    // beforeEach(() => {
    //     render(<Counter />);
    // });
    //
    // const getCount = () => screen.getByTestId('count');
    // const increment = () => screen.getByTestId('increment');
    // const decrement = () => screen.getByTestId('decrement');
    // const reset = () => screen.getByTestId('reset');
    //
    // test('should start at 0', () => {
    //     expect(getCount()).toHaveTextContent('Count: 0');
    // });
    //
    // test('increments count by 1', async () => {
    //     await userEvent.click(increment());
    //     expect(getCount()).toHaveTextContent('Count: 1');
    // });
    //
    // test('decrements count by 1', async () => {
    //     await userEvent.click(decrement());
    //     expect(getCount()).toHaveTextContent('Count: -1');
    // });
    //
    // test('resets to 0 after increment', async () => {
    //     await userEvent.click(increment());
    //     await userEvent.click(reset());
    //     expect(getCount()).toHaveTextContent('Count: 0');
    // });
    //
    // test('does not increment beyond 10', async () => {
    //     for (let i = 0; i < 15; i++) {
    //         await userEvent.click(increment());
    //     }
    //     expect(getCount()).toHaveTextContent('Count: 10');
    // });
    //
    // test('does not decrement below -10', async () => {
    //     for (let i = 0; i < 15; i++) {
    //         await userEvent.click(decrement());
    //     }
    //     expect(getCount()).toHaveTextContent('Count: -10');
    // });
    //
    // test('multiple interactions (simulate user)', async () => {
    //     await userEvent.click(increment());
    //     await userEvent.click(increment());
    //     await userEvent.click(decrement());
    //     await userEvent.click(reset());
    //
    //     expect(getCount()).toHaveTextContent('Count: 0');
    // });
    //
    // test('has accessible counter label', () => {
    //     expect(screen.getByLabelText('counter')).toBeInTheDocument();
    // });

    test('calls onChange callback when value changes', async () => {
        const handleChange = vi.fn(); // jest.fn() tương đương trong vitest

        render(<Counter onChange={handleChange} />);
        await userEvent.click(screen.getByTestId('increment'));
        expect(handleChange).toHaveBeenCalledWith(0); // do count chưa update lúc gọi
    });

});
