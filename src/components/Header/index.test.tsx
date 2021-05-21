import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '.';

test('renders header with correct header text', () => {
  render(<Header />);
  const incortaElement = screen.getByText(/Incorta Plotter/i);
  expect(incortaElement).toBeInTheDocument();
});
