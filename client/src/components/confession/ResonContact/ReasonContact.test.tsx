import { render, screen } from '@testing-library/react';
import ReasonContact, { ReasonContactProps } from './ReasonContact';

test('renders Reason of Contact content', () => {
	const reasonProps: ReasonContactProps = {
        selectValue: "selectValue",
        onChangeSelect: () => {},
        details: "details",
        onChangeDetails: () => {},
	}

	render(<ReasonContact {...reasonProps}/>);
		
    //check if label is existed
    const labelNameText = screen.getByText(
		/Reason for Contact/i
	);
	expect(labelNameText).toBeInTheDocument();

	//check if textbox is existed
    const inputText = screen.getAllByRole('textbox').find((i) => i.className === 'input');
	expect(inputText).toBeInTheDocument();

});

