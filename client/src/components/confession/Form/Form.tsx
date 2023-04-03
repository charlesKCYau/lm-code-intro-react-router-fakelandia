import { useState } from 'react';
import ReasonContact from '../ResonContact/ReasonContact';
import Subject from '../Subject/Subject';
import { API_BASE_URL } from '../../../config/config';

const Form = () => {
	const [ subjectInputValue, setSubjectInputValue ] = useState<string>('');
    const [ detailsInputValue, setDetailsInputValue ] = useState<string>('');
    const [ selectValue, setSelectValue ] = useState<string>('default');

	const submitForm = async () => {

		try {
			
			const result = await fetch(`${API_BASE_URL}/confess`, {
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({ "subject": subjectInputValue, "reason": selectValue, "details": detailsInputValue }),
			});

			const json = await result.json();
			alert("insert status: " + json.success + "\nmessage: " + json.message);
			// if (json.success && selectValue !== "just-talke")

		} catch (e) {
			console.error(e);
		}    
	}

	return (
		<>
			<section className='confessionForm'>
				<form className="form__container form form__text" onSubmit={submitForm}>
					<Subject subject={subjectInputValue} onChangeSubject={(e : any) => setSubjectInputValue(e.target.value)} />

					<ReasonContact selectValue={selectValue} onChangeSelect={(e : any) => setSelectValue(e.target.value)} 
						details={detailsInputValue} onChangeDetails={(e : any) => setDetailsInputValue(e.target.value)} />
					
					<button id="button" className = "button" type="submit" disabled>Confess</button>
				</form>
			</section>
		</>
	);
};

export default Form;
