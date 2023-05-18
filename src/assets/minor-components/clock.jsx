import { useState, useEffect} from "react";
import {Box, Text} from '@chakra-ui/react'
export const Clock = () =>{
    let newDate = new Date()
    
    const [date, setDate] = useState(newDate);
    
    useEffect(()=>{
        const refreshClock = () =>{
            setDate(new Date());
        };
        setInterval(refreshClock, 1000);
    })
   
    // console.log(date.toLocaleTimeString());
    
    return(
        <Box as="div">
            <Text>{date.toLocaleTimeString()}</Text>
        </Box>
    )
}