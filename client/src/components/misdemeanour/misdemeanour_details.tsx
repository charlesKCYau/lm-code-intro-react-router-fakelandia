import { useState } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import { misdemenourConv } from "../../utils/misdemenaour_conversion";
import MisdemenaourDropdown from "./misdemenaour_dropdown";
import { misdemenaourDropdownProps } from "./misdemenaour_dropdown";

interface MisdemeanourDetailsProps {
    misdemeanour: Misdemeanour[];
}

const MisdemeanourDetails: React.FC<MisdemeanourDetailsProps> = ({misdemeanour: mis}) => {
    const listItems = mis.map((m) => <tr><td>{m.citizenId}</td><td>{m.date}</td><td>{misdemenourConv(m.misdemeanour)}</td><td></td></tr>);
    const [ misList, setMisList ] = useState<JSX.Element[]>(listItems);
    const [ misValue, setMisValue ] = useState<string>('');

    const onChangeHandler = (value: string) => {
        console.log(value);
        if (value !== "default") {
            setMisList(mis.filter((m) => m.misdemeanour === value).map((m) => <tr><td>{m.citizenId}</td><td>{m.date}</td><td>{misdemenourConv(m.misdemeanour)}</td><td></td></tr>)); 
        } else {
            setMisList(listItems);
        }
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Citizen ID</th>
                        <th>Date</th>
                        <th>Misdemeanour <MisdemenaourDropdown misKind = {misValue} misOriginal = {mis} onChangeMisValue = {onChangeHandler}/></th>
                        <th>Punishment Idea</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {listItems} */}
                    {misList}
                </tbody>   
            </table>            
        </>
    )
}

export default MisdemeanourDetails;
