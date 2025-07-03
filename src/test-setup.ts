import '@testing-library/jest-dom';

// Mock modules that cause issues in tests
jest.mock('@supabase/supabase-js', () => ({
  createClient: jest.fn(() => ({
    auth: {
      getUser: jest.fn(),
      signIn: jest.fn(),
      signOut: jest.fn(),
    },
    from: jest.fn(() => ({
      select: jest.fn(),
      insert: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    })),
  })),
}));

jest.mock('wagmi', () => ({
  useAccount: jest.fn(() => ({ address: undefined, isConnected: false })),
  useConnect: jest.fn(() => ({ connect: jest.fn() })),
  useDisconnect: jest.fn(() => ({ disconnect: jest.fn() })),
}));

// Mock Web3 providers
Object.defineProperty(window, 'ethereum', {
  writable: true,
  value: {
    request: jest.fn(),
    on: jest.fn(),
    removeListener: jest.fn(),
  },
});