import { useState } from 'react';
import { validateAllInputField } from '../../../validation/validation';

export interface TextInputProps {
    value: string;
    hiddenValue: string;
    onChange: (e: any)=>void;
}

const TextInput: React.FC<TextInputProps> = ({value: value, hiddenValue: hiddenValue, onChange: onChange}) => {
    return (
        <>
            <input className = "input" type="text" value={value} onChange={onChange} onKeyUp={validateAllInputField}/>
            <input type="hidden" id="input" value={hiddenValue} />
        </>
    );
};

export default TextInput;
