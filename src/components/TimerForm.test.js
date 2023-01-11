import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimerForm from './TimerForm';
import ReactDOM from "react-dom";

test('should render a button with add timer text', () => {
    ReactDOM.createPortal = jest.fn(modal => modal);
    render(<TimerForm />);
    const buttonElement = screen.getByText('Add timer');
    expect(buttonElement).toBeInTheDocument();

})