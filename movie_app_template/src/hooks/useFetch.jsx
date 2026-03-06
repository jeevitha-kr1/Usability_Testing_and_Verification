import { useEffect } from "react";
import { useState } from "react";
import { fetchDataFromApi } from "../utils/api";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setError(null);
        setData(null);
        fetchDataFromApi(url).then((res) => {
            setData(res);
            setLoading(false);
        }).catch((err) => {
            setError("something went wrong");
            setLoading(false);
        });
    }, [url]);

    return { data, loading, error };

    
};

export default useFetch;
