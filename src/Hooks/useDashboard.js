import { useEffect, useState } from "react"

const useDashboard = () =>{
    const [values, setValues] = useState([]);
    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then (data => setValues(data))

    },[])
    return[values,setValues]
}

export default useDashboard;