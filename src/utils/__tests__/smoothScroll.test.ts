import { smoothScrollToSection } from '../smoothScroll';

// Mock scrollIntoView
const mockScrollIntoView = jest.fn();
Element.prototype.scrollIntoView = mockScrollIntoView;

describe('smoothScrollToSection', () => {
  beforeEach(() => {
    mockScrollIntoView.mockClear();
    document.body.innerHTML = '';
  });

  it('scrolls to element when it exists', () => {
    const testElement = document.createElement('div');
    testElement.id = 'test-section';
    document.body.appendChild(testElement);

    smoothScrollToSection('test-section');

    expect(mockScrollIntoView).toHaveBeenCalledWith({
      behavior: 'smooth',
      block: 'start',
    });
  });

  it('does not throw when element does not exist', () => {
    expect(() => {
      smoothScrollToSection('non-existent-section');
    }).not.toThrow();

    expect(mockScrollIntoView).not.toHaveBeenCalled();
  });
});