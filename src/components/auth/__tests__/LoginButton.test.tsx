import { render } from '@testing-library/react';
import { LoginButton } from '../LoginButton';

// Mock the auth service
jest.mock('@/services/auth', () => ({
  signInWithGoogle: jest.fn(),
  signOut: jest.fn(),
}));

describe('LoginButton', () => {
  it('renders without crashing', () => {
    const { container } = render(<LoginButton />);
    expect(container).toBeInTheDocument();
  });
});