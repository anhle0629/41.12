import axios from "axios";
import {useState, useEffect} from "react";


function  useAxios (baseUrl, keyInLs){
    const [responses, setReponses] = localStorage(keyInLs)
    
    const addReponseData = async(formatter = data => data, restOfUrl ="")=>{
        const response = await axios.get(`${baseUrl}${restOfUrl}`)
        setReponses(data => [...data, formatter(response.data)])
    }

    const clearResponses = () => setReponses([]);

    return [responses, addReponseData, clearResponses]

    
}

function useLocalStorage(key, initalValue = []){
    if(localStorage.getItem(key)){
        initalValue = JSON.parse(localStorage.getItem(key))
    }

    const [value, setValue] = useState(initalValue)

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue]
}
export default useLocalStorage; 
export {useAxios, useLocalStorage}