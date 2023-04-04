import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Textarea, { TextareaProps } from './Textarea';

test('renders Textarea content', () => {
	const textareaProps: TextareaProps = {
        detailsInputValue: "detailsInputValue",
        hiddenValue: "hiddenValue",
        onChange: () => {},
	}

	render(<Textarea {...textareaProps}/>);
		
	//check if textbox is existed
    const inputText = screen.getAllByRole('textbox').find((i) => i.className === 'input');
	expect(inputText).toBeInTheDocument();

});
