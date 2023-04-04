import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

test('renders header content', () => {
	render(<Header />, {wrapper: BrowserRouter});
	const messageContent = screen.getByText(
		/Fakelandia/
	);
	expect(messageContent).toBeInTheDocument();
});
