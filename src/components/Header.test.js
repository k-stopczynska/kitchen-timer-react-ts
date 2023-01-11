import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom'

import Header from './Header';

test('should render heading', () => {
    render(<Header />);
    const title = screen.getByText(/fine dining needs fine timing/i);
    expect(title).toBeInTheDocument();
})