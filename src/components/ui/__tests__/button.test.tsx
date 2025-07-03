import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '../button';

describe('Button', () => {
  it('renders with correct text', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    const { getByRole } = render(<Button onClick={handleClick}>Click me</Button>);
    
    await user.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies variant classes correctly', () => {
    const { getByRole } = render(<Button variant="destructive">Delete</Button>);
    const button = getByRole('button');
    expect(button).toHaveClass('bg-destructive');
  });

  it('is disabled when disabled prop is true', () => {
    const { getByRole } = render(<Button disabled>Disabled</Button>);
    expect(getByRole('button')).toBeDisabled();
  });
});