
import { render, fireEvent, screen } from '@testing-library/react';
import BugForm from './BugForm';

test('it should submit the form', async () => {
  render(<BugForm />);
  fireEvent.change(screen.getByLabelText(/title/i), { target: { value: 'Test Bug' } });
  fireEvent.change(screen.getByLabelText(/description/i), { target: { value: 'Bug description' } });
  fireEvent.click(screen.getByText(/report bug/i));

  expect(await screen.findByText('Bug reported successfully!')).toBeInTheDocument();
});
