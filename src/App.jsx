import './App.css';
import "leaflet/dist/leaflet.css";
import {Box, Text, Flex,  } from "@chakra-ui/react";
import {BiTimeFive} from 'react-icons/bi';
import { Clock } from './assets/minor-components/clock';
import { Weather_Indicator } from './assets/minor-components/weather-widget';
import { MapPage } from './assets/minor-components/mapPage';
function App() {

  return (
    <>
    <Flex w={'100vw'} bg={'gray.100'} >
    <Box w={'65vw'} h={'100vh'} >
      <MapPage></MapPage>
      <Box display={'flex'}   bg={'gray.300'}  backdropFilter={'auto'}  blur={'2px'} padding={'0.4rem'} flexDirection={'row'} position={'absolute'} top={'0'} left={'5vw'}  zIndex={'9999'} width={'fit-content'} >
        <Box display='flex' justifyContent={'center'} alignItems={'center'}>
          <Text><BiTimeFive style={{marginRight: '5px'}}></BiTimeFive></Text>
          <Clock></Clock>
        </Box>
          <Weather_Indicator></Weather_Indicator>
      </Box>
    </Box> 
    <Flex flexDirection={'column'} w={'35vw'} borderLeftWidth={'1px'} borderColor={'gray.800'}>

    </Flex>
    </Flex>
        
    </>
  );
}

export default App
