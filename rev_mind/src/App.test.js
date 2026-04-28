import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the RevMind hero content', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /transform your business data into intelligent insights/i
    })
  ).toBeInTheDocument();
});
