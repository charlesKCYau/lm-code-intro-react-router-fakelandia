import { render, screen } from '@testing-library/react';
import MisdemeanourDetails, { MisdemeanourDetailsProps } from './misdemeanour_details';

test('renders misdemeanour table header', () => {
	const misDetailsProps: MisdemeanourDetailsProps = {
        misdemeanour: [],
    }

	render(<MisdemeanourDetails {...misDetailsProps}/>);
		
    //check if table header is existed
    const optionText = screen.getByText(
        /Citizen ID/i
    );
    expect(optionText).toBeInTheDocument();
    
});

test('renders misdemeanour table details', () => {
	const misDetailsProps: MisdemeanourDetailsProps = {
        misdemeanour: [{citizenId:1234, misdemeanour:"lift", date:"2022-02-02"}],
    }

	render(<MisdemeanourDetails {...misDetailsProps}/>);
		
    //check if table details is existed
    const optionText = screen.getByText(
        /1234/i
    );
    expect(optionText).toBeInTheDocument();
    
});
