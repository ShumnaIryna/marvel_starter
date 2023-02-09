import { useState, useCallback } from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false);
    const [error, setErorr] = useState(null);

    const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

        setLoading(true);

        try {
            const response = await fetch(url, {method, body, headers});

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            
            const data = await response.json();

            setLoading(false);
            return data;
        } catch(e) {
            setLoading(false);
            setErorr(e.message);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => setErorr(null, []));

    return {loading, request, error, clearError}
}
    //[]-empty dependency array