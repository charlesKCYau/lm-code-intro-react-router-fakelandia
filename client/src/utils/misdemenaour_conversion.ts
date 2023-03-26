import { MisdemeanourKind, MISDEMEANOURS } from "../types/misdemeanours.types";

export const misdemenourConv = (misName: MisdemeanourKind) => {
        if (misName === MISDEMEANOURS[0])
            return "Mild Public Rudeness 🤪";
        else if (misName === MISDEMEANOURS[1])
            return "Not Eating Your Vegetables 🥗";
        else if (misName === MISDEMEANOURS[2])
            return "Speaking in a Lift 🗣";
        else if (misName === MISDEMEANOURS[3])
            return "Supporting Manchester United 😈";
};