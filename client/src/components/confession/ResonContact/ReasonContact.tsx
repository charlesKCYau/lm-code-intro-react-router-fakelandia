import { useState } from 'react';
import DropDown from '../DropDown/DropDown';
import Message from '../Message/Message';
import { validateAllInputField } from '../../../validation/validation';
import Textarea from '../Textarea/Textarea';

export interface ReasonContactProps {
    selectValue: string;
    onChangeSelect: (e: any) => void;
    details: string;
    onChangeDetails: (e: any) => void;
}

const ReasonContact: React.FC<ReasonContactProps> = ({selectValue, onChangeSelect, details: detailsInputValue, onChangeDetails: onChangeDetails}) => {
        const [ errorMessage, setErrorMessage ] = useState<string | undefined>();
        const [ selectErrorMessage, setSelectErrorMessage ] = useState<string | undefined>();
        const [ hiddenTextareaValue, setHiddenTextareaValue ] = useState<string>('false');
        const [ hiddenDropdownValue, setHiddenDropdownValue ] = useState<string>('false');

        const validate = (inputValue:string) => {
            setHiddenTextareaValue("false");

            if (inputValue.length < 5) return "Too short, Subject should be between 5 and 50";
            if (inputValue.length > 50) return "Too long, Subject should be between 5 and 50";

            setHiddenTextareaValue("true");

        } // some validation function here

        const validateDropdown = (inputValue:string) => {
            setHiddenDropdownValue("false");

            if (inputValue === "default") return "Please select one reason.";

            setHiddenDropdownValue("true");

        } // some validation function here

    return (
        <>
            <div >
                <label htmlFor='ReasonContact'>Reason for Contact:</label>
                <DropDown value={selectValue} hiddenValue={hiddenDropdownValue} onChange={(e) => {
                    const selectErrorMessage = validateDropdown(e.target.value);
                    setSelectErrorMessage(selectErrorMessage);
                    onChangeSelect(e);
                }} />
            </div>
            <div>
              <Message message={selectErrorMessage} />
               <Textarea detailsInputValue={detailsInputValue} hiddenValue={hiddenTextareaValue} onChange={(e) => {
                    const errorMessage = validate(e.target.value);
                    setErrorMessage(errorMessage);
                    onChangeDetails(e);
                }} />

                <Message message={errorMessage} />
            </div>
        </>
    )
};

export default ReasonContact;
