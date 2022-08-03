import '@testing-library/jest-dom';
import { Button } from '../components/Button';
import { render, screen } from '@testing-library/react';

test ('Rendering Button component', () => {
    render(
    <Button />
    );
    const button = screen.getByTestId("button")
    expect(button).toBeInTheDocument();
});