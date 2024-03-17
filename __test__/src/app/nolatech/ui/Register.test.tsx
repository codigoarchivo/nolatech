import { render, screen, fireEvent, act } from '@testing-library/react';
import { Register } from '@/app/(nolatech)/ui/Register';
import '@testing-library/jest-dom';

describe('form operation', () => {
  it('should make the button work and call onSubmit', () => {
    // Render the form component
    render(<Register />);

    // Find the 'I'M IN' button by its text
    const button = screen.getByRole('button', { name: 'I’M IN' });

    act(() => {
      fireEvent.click(button);
    });
  });
  it('should handle input field value correctly', () => {
    // Render the form component
    render(<Register />);

    // Find the input field by its label or 'name' attribute
    const input = screen.getByPlaceholderText('First Name');

    // Simulates a change in the value of the input field
    act(() => {
      fireEvent.change(input, { target: { value: 'New Value' } });
    });
    // Verify that the input field value has been updated correctly
    expect(input).toHaveValue('New Value');
  });
});
