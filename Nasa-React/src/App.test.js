import { render, screen } from '@testing-library/react';
import App from './App';

// TODO: Get this test to actually work
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
