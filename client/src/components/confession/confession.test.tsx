import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Confession from './confession';

test('renders confession content', () => {
	render(<Confession />);
	const messageContent = screen.getByText(
		/Confession Page/
	);
	expect(messageContent).toBeInTheDocument();
});
