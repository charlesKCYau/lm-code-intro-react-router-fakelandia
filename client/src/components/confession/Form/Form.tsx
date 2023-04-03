import { useState, useRef } from 'react';
import ReasonContact from '../ResonContact/ReasonContact';
import Subject from '../Subject/Subject';
import { API_BASE_URL } from '../../../config/config';

const Form = () => {
	const formElement = useRef(null);

	const [ subjectInputValue, setSubjectInputValue ] = useState<string>('');
    const [ detailsInputValue, setDetailsInputValue ] = useState<string>('');
    const [ selectValue, setSelectValue ] = useState<string>('default');


	function useForm() {
		const [status, setStatus] = useState("");
		const [justTalked, setJustTalked] = useState("");
		const [message, setMessage] = useState("");
	  
		const handleSubmit = async (e:Event) => {
			try {
				e.preventDefault();
				setStatus("loading");
				setMessage("");
		
				const result = await fetch(`${API_BASE_URL}/confess`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ "subject": subjectInputValue, "reason": selectValue, "details": detailsInputValue }),
				})

				const status = await result.status;
				const json = await result.json();
				setMessage(json.message);

				if (status !== 200) {
					setStatus("error");
				} else {
					setStatus("success");
				}
			} catch (e) {
				console.error(e);
			}    

		};
	  
		return { handleSubmit, status, justTalked, message };
	}

	const { handleSubmit, status, justTalked, message } = useForm();

	if (status === "success") {
		return (
		  <>
			<h2 className="message">Thank you!</h2>
			<h2 className="message">{message}</h2>
		  </>
		);
	}
	
	if (status === "error") {
		return (
			<>
			<h2 className="message">Something bad happened!</h2>
			<h2 className="message">{message}</h2>
			</>
		);
	}

	const submitForm = async (e:Event) => {

		try {
			e.preventDefault();
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
				<form className="form__container form form__text" onSubmit={(e : any) => handleSubmit(e)} ref={formElement}>
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
