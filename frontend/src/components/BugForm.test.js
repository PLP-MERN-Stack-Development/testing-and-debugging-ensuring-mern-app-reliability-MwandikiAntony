
import { render, fireEvent, screen } from '@testing-library/react';
import BugForm from './BugForm';



  expect(await screen.findByText('Bug reported successfully!')).toBeInTheDocument();
});
