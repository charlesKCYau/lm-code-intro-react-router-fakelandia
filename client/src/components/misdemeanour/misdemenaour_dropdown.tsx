import { useState } from 'react';
import { Misdemeanour, MisdemeanourKind } from '../../types/misdemeanours.types';
import { misdemenourConv } from '../../utils/misdemenaour_conversion';

export interface misdemenaourDropdownProps {
    misKind: string;
    misOriginal: Misdemeanour[];
    onChangeMisValue: (e: any) => void;
}

const MisdemenaourDropdown: React.FC<misdemenaourDropdownProps> = ({misKind: value, misOriginal: misOriginal, onChangeMisValue: onChangeMisValue}) => {
    const misList = misOriginal.map((mis) => mis.misdemeanour);
    let unique = misList.filter((item, i, ar) => ar.indexOf(item) === i);
    const misListOption = unique.map((mis) => <option value={mis}>{misdemenourConv(mis)}</option>);

    const [ misValue, setMisValue ] = useState<string>(value);

    return(
    <>
        <select className="td" value={misValue} onChange={(e) => {
                setMisValue(e.target.value);
                onChangeMisValue(e.target.value);
            }}>
            <option value="default">Filter</option>
            {misListOption}
        </select>   
    </>
)}
;


export default MisdemenaourDropdown;
  