import { useState } from 'react';
import Message from '../Message';
import TextInput from '../TextInput/TextInput';
import { validateAllInputField } from '../../../validation/validation';

export interface SubjectProps {
    subject: string;
    onChangeSubject: (e: any) => void;
}

const Subject: React.FC<SubjectProps> = ({subject: subjectInputValue, onChangeSubject: onChangeSubject}) => {
        const [ errorMessage, setErrorMessage ] = useState<string | undefined>();
        const [ hiddenValue, setHiddenValue ] = useState<string>('false');
        
        const validate = (inputValue:string) => {
            const noSpecialChars = inputValue.replace(/[^a-zA-Z0-9 ]/g, '');

            setHiddenValue("false");

            if (inputValue.length < 2) return "Too short, Subject should be between 2 and 20";
            if (inputValue.length > 20) return "Too long, Subject should be between 2 and 20";
            if (inputValue !== noSpecialChars) return "No special characters allowed";
            
            setHiddenValue("true");
        } // some validation function here

    return (
        <div>
            <label htmlFor='subject'>Subject:</label>
            <TextInput value={subjectInputValue} hiddenValue={hiddenValue} onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    onChangeSubject(e);
                    // validateAllInputField();
            }} />
            <Message message={errorMessage} />
            {/* <input type="hidden" id="input" value={hiddenValue} /> */}
        </div>
)
};

export default Subject;
