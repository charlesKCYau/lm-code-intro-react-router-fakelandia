import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './home';

test('renders Home Page Title', () => {
	render(<Home />);
	const messageContent = screen.getByText(
		/Home Page!/
	);
	expect(messageContent).toBeInTheDocument();
});
