import { validateAllInputField } from '../../../validation/validation';

export interface TextareaProps {
    detailsInputValue: string;
    hiddenValue: string;
    onChange: (e: any)=>void;
}

const Textarea: React.FC<TextareaProps> = ({detailsInputValue: detailsInputValue, hiddenValue: hiddenValue, onChange: onChange}) => {
    return (
        <>
            <textarea className = "input" cols={30} rows={4} value={detailsInputValue} onChange={onChange} onKeyUp={validateAllInputField}></textarea>
            <input type="hidden" id="textarea" value={hiddenValue} />
        </>
    );
};

export default Textarea;
