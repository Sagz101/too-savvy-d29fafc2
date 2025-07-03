import { cn } from '../utils';

describe('cn utility function', () => {
  it('merges class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('handles conditional classes', () => {
    expect(cn('base', true && 'conditional', false && 'hidden')).toBe('base conditional');
  });

  it('handles undefined and null values', () => {
    expect(cn('base', undefined, null, 'end')).toBe('base end');
  });

  it('handles Tailwind class conflicts', () => {
    expect(cn('p-4', 'p-2')).toBe('p-2');
  });
});