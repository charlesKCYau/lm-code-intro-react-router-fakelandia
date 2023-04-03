import { Misdemeanour } from "../../types/misdemeanours.types";
import { useFetchData } from "../../hooks/use_fetch_data";
import { API_BASE_URL } from "../../config/config";
import { outputFetchResult } from "../../utils/output_fetch_result";
import MisdemeanourDetails from "./misdemeanour_details";
import { MisContextProvider } from "./MisdemeanourContext";
import { confessionDB } from "../confession/confessionData/confessionData";
import { misdemenourConv } from "../../utils/misdemenaour_conversion";

const MisdemeanourObject : React.FC = () => {
    
    const { data, error, isFetching, status } = useFetchData<Array<Misdemeanour>>(
        `${API_BASE_URL}/misdemeanours/10/`
    );

    let isEmpty: boolean;
    confessionDB.confDBarray.length === 0 ? isEmpty = true : isEmpty = false;
    confessionDB.confDBarray.forEach((e) => {e.subject.concat(" ").concat(e.reason).concat(" ").concat(e.details)});
    const listConf = confessionDB.confDBarray.map((c) => <tr><td>{c.subject}</td><td>{misdemenourConv(c.reason)}</td><td>{c.details}</td></tr>);

    return (
        <MisContextProvider>
            <h1>Misdemeanour Page</h1>
            {isEmpty ? (
                <></>
            ) : (
                <>
                    <h2>Latest received confession:</h2>
                    <table className="message">
                        <thead>
                            <tr>
                                <th>Subject</th>
                                <th>Reason</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listConf}
                        </tbody>   
                    </table> 
                </>
            )}
            <h1>
                {isFetching ? (
                <>
                    "Fetching..."
                    <img src="/images/4colors.gif" alt="loading"/>
                </>
                ) : (
                <>
                    {outputFetchResult(status, error, data, (data) => (
                        <MisdemeanourDetails misdemeanour={data} />
                    ))}
                </>
                )}
            </h1>
        </MisContextProvider>
    );

}

export default MisdemeanourObject;