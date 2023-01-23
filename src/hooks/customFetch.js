import React, {useState, useEffect} from "react";
import axios from "axios";

function customFetch(url){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)


    axios.get(url)
    .then(
        (response) =>{
            const {data: responseData} = response
            setData(responseData);
        }
    )
    .catch( (error) => setError(error.message))
    .finally( () => setLoading(false))

    return {loading, data,error}
}

export default customFetch

