import { render, screen } from '@testing-library/react';
import Footer from './footer';

test('renders footer content', () => {
	render(<Footer />);
	const messageContent = screen.getByText(
		/@ by Charles 2023/i
	);
	expect(messageContent).toBeInTheDocument();
});
