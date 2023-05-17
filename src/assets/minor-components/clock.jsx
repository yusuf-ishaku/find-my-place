import { useState} from "react";
import {Box} from '@chakra-ui/react'
export const Clock = () =>{
    const [date, setDate] = useState(new Date())
    // console.log(date.toLocaleTimeString());
    const refreshClock = () =>{
        setDate(new Date());
    };
    setInterval(refreshClock, 1000)
    return(
        <>
        <Box>{date.toLocaleTimeString()}</Box>
        </>
        
    )
}