import { TiWeatherSunny } from "react-icons/ti";
import { Box, Text, } from "@chakra-ui/react";
import { useEffect, useState } from "react";
// import { useQuery,  } from "react-query";
import Axios from "axios";
export const Weather_Indicator = () =>{
    const [temp, setTemp] = useState("");
    useEffect(()=>{
        let Success = (position) =>{
            // console.log(position)
            let lat = position.coords.latitude;
            let lon= position.coords.longitude;
            try{
                Axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat + ", " + lon}?key=D6EC8H65AE48U4YKZ8KWLX67R`)
                .then((response) =>setTemp(response.data.currentConditions.temp));
                
            }catch(err){
                console.log(err)
            }
            return position
        }
        navigator.geolocation.getCurrentPosition(Success, () =>{alert("location access denied" ); return});
    }, []);
    return(
        <>
        <Box mx={'3'} display='flex' justifyContent={'center'} alignItems={'center'} >
            <TiWeatherSunny style={{marginRight: '10px'}}></TiWeatherSunny>
            <Text>{temp + '\u00b0' + "F"}</Text>
        </Box>
        </>
        
    )
}