import { render, screen } from '@testing-library/react';
import { confessionDB } from '../confession/confessionData/confessionData';
import MisdemeanourObject from './misdemeanour';

test('renders misdemeanour table header', () => {
    confessionDB.confDBarray.push({reason:"reason", subject:"subject", details:"details"})

    render(<MisdemeanourObject />);
		
    //check if Page caption is existed
    let optionText = screen.getByText(
        /Misdemeanour Page/i
    );
    expect(optionText).toBeInTheDocument();
    
    //check if Page caption is existed
    optionText = screen.getByText(
        /Reason/i
    );
    expect(optionText).toBeInTheDocument();
    
});
