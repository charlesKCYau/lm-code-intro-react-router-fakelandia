import { render, screen } from '@testing-library/react';
import Subject, { SubjectProps } from './Subject';

test('renders Subject content', () => {
	const subjectProps: SubjectProps = {
        subject: "subjectt",
        onChangeSubject: () => {},
	}

	render(<Subject {...subjectProps}/>);
		
    //check if label is existed
    const labelNameText = screen.getByText(
		/Subject/i
	);
	expect(labelNameText).toBeInTheDocument();

	//check if textbox is existed
    const inputText = screen.getAllByRole('textbox').find((i) => i.className === 'input');
	expect(inputText).toBeInTheDocument();

});

