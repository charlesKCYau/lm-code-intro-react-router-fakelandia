import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import TextInput, { TextInputProps } from './TextInput';

test('renders TextInput content', () => {
	const textInputProps: TextInputProps = {
        value: "value",
        hiddenValue: "hiddenValue",
        onChange: () => {},
	}

	render(<TextInput {...textInputProps}/>);
		
	//check if textbox is existed
    const inputText = screen.getAllByRole('textbox').find((i) => i.className === 'input');
	expect(inputText).toBeInTheDocument();

});
