import { useState } from 'react';
import ReasonContact from '../ResonContact/ReasonContact';
import Subject from '../Subject/Subject';

const Form = () => {
	const [ subjectInputValue, setSubjectInputValue ] = useState<string>('');
    const [ detailsInputValue, setDetailsInputValue ] = useState<string>('');
    const [ selectValue, setSelectValue ] = useState<string>('default');
    
    const submitForm = () => {
    }

	return (
		<section className='confessionForm'>
			<form className="form__container form form__text" >
				<Subject subject={subjectInputValue} onChangeSubject={(e : any) => setSubjectInputValue(e.target.value)} />

				<ReasonContact selectValue={selectValue} onChangeSelect={(e : any) => setSelectValue(e.target.value)} 
					details={detailsInputValue} onChangeDetails={(e : any) => setDetailsInputValue(e.target.value)} />
				
				<button id="button" className = "button" type="submit" onClick={(event) => {submitForm()}} disabled>Confess</button>
			</form>
		</section>
	);
};

export default Form;
