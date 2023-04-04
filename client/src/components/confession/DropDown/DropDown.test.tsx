import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import DropDown, { DropDownProps } from './DropDown';

test('renders confession dropdown', () => {
	const dropdownProps: DropDownProps = {
        value: "test",
        hiddenValue: "hiddenValue",
        onChange: () => {}
    }

	render(<DropDown {...dropdownProps}/>);
		
    //check if option is existed
    const optionText = screen.getByText(
        /Select/i
    );
    expect(optionText).toBeInTheDocument();
    
	//check if textbox is existed
    const dropdownlist = screen.getAllByRole('combobox').find((i) => i.className === 'dropdownlist');
	expect(dropdownlist).toBeInTheDocument();

});

it(`Given the required props,
		When the component is rendered,
		Then the "wrong answer" description should be present`, async () => {
		const mockTrigger = jest.fn();

        const dropdownProps: DropDownProps = {
            value: "test",
            hiddenValue: "hiddenValue",
            onChange: mockTrigger,	
		};
		
        render(<DropDown {...dropdownProps}/>);

		await user.selectOptions(screen.getByRole('combobox'), 'just-talk');

    	expect(mockTrigger).toHaveBeenCalled();	

});

