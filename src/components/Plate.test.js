import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ReactDOM from "react-dom";
import Plate from './Plate';
import userEvent from '@testing-library/user-event';

test('should render a button', () => {
    render(<Plate />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
});
test('should click on a button', () => {
    ReactDOM.createPortal = jest.fn(modal => modal);
    render(<Plate />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement)
    expect(screen.getByText(/set time in minutes/i)).toBeInTheDocument();
})