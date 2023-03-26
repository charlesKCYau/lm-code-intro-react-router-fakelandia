import React, { useState, useContext } from "react";
import { Misdemeanour } from "../../types/misdemeanours.types";

const MisdemeanourContext = React.createContext<{misdemeanour: Misdemeanour[]}>({ misdemeanour: []});

// We then only need to create one hook
export function useMisdemenour() {
    return useContext(MisdemeanourContext)
}

export function MisContextProvider ({ children } : { children: React.ReactNode }) {

    const [misdemeanourRetrieved, setMisdemeanourRetrieved] = useState<Array<Misdemeanour>>([]);

    return(
        <MisdemeanourContext.Provider value={{misdemeanour: misdemeanourRetrieved}}>
            {children}
        </MisdemeanourContext.Provider>
    )
}