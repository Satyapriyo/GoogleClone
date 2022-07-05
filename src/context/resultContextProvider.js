import React, { createContext, useContext, useState } from "react";
const resultContext = createContext();
const baseUrl = "https://google-search1.p.rapidapi.com/google-search";

export const resultContextProvider = ({children})=>{
    const[results, setResults] = useState([]);
    const[isLoading, setIsLoading]= useState(false);
    const[searchItem, setSearchItem]= useState('');
    const getResults =async(type)=>{
        setIsLoading(true);
        const response = await fetch
    }
    
}
