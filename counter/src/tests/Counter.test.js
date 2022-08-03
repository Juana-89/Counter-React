import '@testing-library/jest-dom';
import { Counter } from '../components/Counter';
import { render, screen } from '@testing-library/react';

test ('Rendering Counter component', () => {
    render(
    <Counter />
    );
    const button = screen.getByTestId('counter')
    expect(button).toBeInTheDocument();
});