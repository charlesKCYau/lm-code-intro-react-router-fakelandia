import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import MisdemeanourDropdown, { misdemeanourDropdownProps } from './misdemeanour_dropdown';

test('renders misdemenour dropdown', () => {
	const misDropdownProps: misdemeanourDropdownProps = {
        misKind: "misKind",
        misOriginal: [],
        onChangeMisValue: () => {}
    }

	render(<MisdemeanourDropdown {...misDropdownProps}/>);
		
    //check if option is existed
    const optionText = screen.getByText(
        /Filter/i
    );
    expect(optionText).toBeInTheDocument();
    
	//check if textbox is existed
    const dropdownlist = screen.getAllByRole('combobox').find((i) => i.className === 'td');
	expect(dropdownlist).toBeInTheDocument();

});

it(`Given the required props,
		When the component is rendered,
		Then the "wrong answer" description should be present`, async () => {
		const mockTrigger = jest.fn();

        const misDropdownProps: misdemeanourDropdownProps = {
            misKind: "misKind",
            misOriginal: [],
            onChangeMisValue: mockTrigger,	
		};
		
        render(<MisdemeanourDropdown {...misDropdownProps}/>);

		await user.selectOptions(screen.getByRole('combobox'), 'Filter');

    	expect(mockTrigger).toHaveBeenCalled();	
});

