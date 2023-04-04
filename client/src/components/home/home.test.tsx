import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './home';

test('renders header content', () => {
	render(<Home />);
	const messageContent = screen.getByText(
		/Home Page!/
	);
	expect(messageContent).toBeInTheDocument();
});
