import './App.css';
import "leaflet/dist/leaflet.css";
import {Box, Text, Flex, Image  } from "@chakra-ui/react";
import {BiTimeFive} from 'react-icons/bi';
import { Clock } from './assets/minor-components/clock';
import { Weather_Indicator } from './assets/minor-components/weather-widget';
import { MapPage } from './assets/minor-components/mapPage';
import { BsFillPlayFill, BsPlayFill, BsFillPeopleFill, BsSpotify } from 'react-icons/bs';
import { AiOutlineStepBackward, AiFillStepForward, AiOutlineStepForward } from 'react-icons/ai';
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
      <Flex w={'35vw'} flexDirection={'column'} h={'100vh'} borderLeftWidth={'1px'} borderColor={'gray.800'}>
        <Box display={'flex'} flexDirection={'column'} w={'100%'} h={'fit-content'} bg={'gray.600'} p={'4'}>
          <Box h={'fit-content'} display={'flex'} flexDirection={'row'}>
            <Image bg={'whiteAlpha.800'} w={'20'} alt='Fortune Image' h={'20'}>
            </Image>
            <Box px={'4'}>
              <Text color={'whiteAlpha.800'} fontSize={'xl'}>Hold My Hand</Text>
              <Text color={'whiteAlpha.800'} fontSize={'sm'}>Lady Gaga</Text>
            </Box>
          </Box>
          <Box px={'8'} py={'6'} h={'auto'} display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
              <AiOutlineStepBackward size={'28px'} style={{color: 'white'}}></AiOutlineStepBackward>
              <BsFillPlayFill size={'32px'} style={{color: 'white'}}></BsFillPlayFill>
              <AiOutlineStepForward size={'28px'} style={{color: 'white'}}></AiOutlineStepForward>
          </Box>
        </Box>
        <Flex flexDirection={'column'}>
            <Box width={'100%'} p={'4'}>
              <Text fontSize={'xl'} color={'gray.800'}>Widgets</Text>
            </Box>
            <Flex flexDirection={'column'}>
                <Flex flexDirection={'row'} borderWidth={'2px'}  alignItems={'center'} p={'4'} fontSize={'16px'} bg={'whiteAlpha.900'}>
                    <BsFillPeopleFill style={{marginRight: "4px"}}></BsFillPeopleFill>
                    Your People
                </Flex>
                <Flex flexDirection={'row'} borderWidth={'2px'} alignItems={'center'} p={'4'} fontSize={'16px'} bg={'whiteAlpha.900'}>
                    <BsSpotify style={{marginRight: "4px"}}></BsSpotify>
                    Spotify
                </Flex>
                <Flex flexDirection={'row'}>

                </Flex>
            </Flex>
        </Flex>
      </Flex>
    </Flex>
        
    </>
  );
}

export default App
