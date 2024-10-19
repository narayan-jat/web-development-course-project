import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState();
    // let data;
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [url])
    console.log("here", data)
    return [data];
}

export default useFetch;