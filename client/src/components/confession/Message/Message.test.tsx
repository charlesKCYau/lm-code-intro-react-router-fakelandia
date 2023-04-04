import { render, screen } from '@testing-library/react';
import Message from './Message';
import { MessageProps } from './Message';

test('renders message content', () => {
    const messageProps: MessageProps = {
		message: "message",
	}

	render(<Message {...messageProps} />);
	const messageContent = screen.getByText(
		/message/i
	);
	expect(messageContent).toBeInTheDocument();
});

it(`Given the required props,
		When the component is rendered,
		Then the appointment description should be present`, () => {
		const requiredProps : MessageProps = {
			message: 'testing message',
		};

    	render(<Message {...requiredProps} />);

    	expect(
    		screen.getByText('testing message')
    	).toBeInTheDocument();
});