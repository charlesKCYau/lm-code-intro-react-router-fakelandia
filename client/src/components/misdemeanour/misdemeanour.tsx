import { Misdemeanour } from "../../types/misdemeanours.types";
import { useFetchData } from "../../hooks/use_fetch_data";
import { API_BASE_URL } from "../../config/config";
import { outputFetchResult } from "../../utils/output_fetch_result";
import MisdemeanourDetails from "./misdemeanour_details";
import { MisContextProvider } from "./MisdemeanourContext";

const MisdemeanourObject : React.FC = () => {
    
    const { data, error, isFetching, status } = useFetchData<Array<Misdemeanour>>(
        `${API_BASE_URL}/misdemeanours/10/`
    );

    return (
        <MisContextProvider>
            <h1>Misdemeanour Page</h1>
            <h1>
                {isFetching ? (
                "Fetching..."
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