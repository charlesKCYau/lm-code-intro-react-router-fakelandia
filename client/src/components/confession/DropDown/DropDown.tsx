import { misdemenourConv } from '../../../utils/misdemenaour_conversion';
import { validateAllInputField } from '../../../validation/validation';

export interface DropDownProps {
    value: string;
    hiddenValue: string;
    onChange: (e: any)=>void;
}

const DropDown: React.FC<DropDownProps> = ({value: value, hiddenValue:hiddenValue, onChange: onChange}) => {
    return (
        <>
            <select className="dropdownlist" value={value} onChange={(e) => onChange(e)} onMouseLeave={validateAllInputField}>
                <option value="default">Select</option>
                <option value="rudeness">{misdemenourConv("rudeness")}</option>
                <option value="vegetables">{misdemenourConv("vegetables")}</option>
                <option value="lift">{misdemenourConv("lift")}</option>
                <option value="united">{misdemenourConv("united")}</option>
                <option value="just-talk">I just want to talk</option>
            </select> 
            <input type="hidden" id="dropdown" value={hiddenValue} />
        </>
    );
};

export default DropDown;
