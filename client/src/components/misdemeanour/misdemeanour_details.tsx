import { useState } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";
import { misdemenourConv } from "../../utils/misdemenaour_conversion";
import MisdemenaourDropdown from "./misdemenaour_dropdown";
import { misdemenaourDropdownProps } from "./misdemenaour_dropdown";
import React from "react";

interface MisdemeanourDetailsProps {
    misdemeanour: Misdemeanour[];
}

const MisdemeanourDetails: React.FC<MisdemeanourDetailsProps> = ({misdemeanour: mis}) => {
    const rand = (x: number) => {
        const tmp = Math.floor(Math.random() * x);
        return tmp <= 50 ? 50 : tmp;
    };

    const imgTag = () => {
        return React.createElement(
            "img",
            {src: "https://picsum.photos/" + rand(100) + "/" + rand(120)},
            null
        );
    }

    const listItems = mis.map((m) => <tr><td>{m.citizenId}</td><td>{m.date}</td><td>{misdemenourConv(m.misdemeanour)}</td><td>{imgTag()}</td></tr>);
    const [ misList, setMisList ] = useState<JSX.Element[]>(listItems);
    const [ misValue, setMisValue ] = useState<string>('');

    const onChangeHandler = (value: string) => {
        console.log(value);
        if (value !== "default") {
            setMisList(mis.filter((m) => m.misdemeanour === value).map((m) => <tr><td>{m.citizenId}</td><td>{m.date}</td><td>{misdemenourConv(m.misdemeanour)}</td><td>{imgTag()}</td></tr>)); 
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
