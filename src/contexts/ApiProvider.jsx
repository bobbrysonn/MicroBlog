import MicroblogApiClient from "../MicroblogApiClient";
import { createContext, useContext } from "react";

// Create context
const ApiContext = createContext();

export default function ApiProvider({ children }) {
    const api = new MicroblogApiClient();

    return (
        <ApiContext.Provider value={api}>
            {children}
        </ApiContext.Provider>
    )
}

export function useApi() {
    return useContext(ApiContext);
}