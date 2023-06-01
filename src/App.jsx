import './App.css';
import "leaflet/dist/leaflet.css";
import {Box, Text, Flex, Image, Button  } from "@chakra-ui/react";
import {BiTimeFive} from 'react-icons/bi';
import { Clock } from './assets/minor-components/clock';
import { Weather_Indicator } from './assets/minor-components/weather-widget';
import { MapPage } from './assets/minor-components/mapPage';
import { BsFillPlayFill, BsFillPeopleFill, BsSpotify } from 'react-icons/bs';
import { AiOutlineStepBackward, AiOutlineStepForward } from 'react-icons/ai';
// import { TfiControlForward } from "react-icons/tfi";
import {FiMinimize2} from "react-icons/fi"
import { useState, useRef } from 'react';

function App() {
  const [mapSize, setSize] = useState(35);
  const userRef = useRef();
  const appField = useRef();
  return (
    <>
    <Box bg={'red'} ref={appField} position={'absolute'} marginBottom={'2vh'} zIndex={'9999'} bottom={'0'} left={'48%'} width={'40px'} height={'40px'} rounded={'full'}>

    </Box>
      <Flex w={"100vw"} bg={"gray.100"}>
        <Box w={`${100 - mapSize}vw`} h={"100vh"}>
          <MapPage></MapPage>
          <Box
            display={"flex"}
            bg={"gray.300"}
            backdropFilter={"auto"}
            blur={"2px"}
            padding={"0.4rem"}
            flexDirection={"row"}
            position={"absolute"}
            top={"0"}
            left={"5vw"}
            zIndex={"9999"}
            width={"fit-content"}
          >
            <Box display="flex" justifyContent={"center"} alignItems={"center"}>
              <Text>
                <BiTimeFive style={{ marginRight: "5px" }}></BiTimeFive>
              </Text>
              <Clock></Clock>
            </Box>
            <Weather_Indicator></Weather_Indicator>
          </Box>
        </Box>
        <Flex
          w={`${mapSize}vw`}
          ref={userRef}
          flexDirection={"column"}
          h={"100vh"}
          borderLeftWidth={"1px"}
          borderColor={"gray.800"}
        >
          {/* <TfiControlForward size={'24px'} ></TfiControlForward> */}
        
          <Box
            display={"flex"}
            flexDirection={"column"}
            w={"100%"}
            h={"fit-content"}
            bg={"gray.600"}
            p={"4"}
          >
            <Box h={"fit-content"} display={"flex"} flexDirection={"row"}  justifyContent={'space-between'}>
              <Box display={"flex"} flexDirection={"row"}>
                <Image
                  bg={"whiteAlpha.800"}
                  w={"20"}
                  alt="Fortune Image"
                  h={"20"}
                  rounded={'lg'}
                ></Image>
                <Box px={"4"}>
                  <Text color={"whiteAlpha.800"} fontSize={"xl"}>
                    Hold My Hand
                  </Text>
                  <Text color={"whiteAlpha.800"} fontSize={"sm"}>
                    Lady Gaga
                  </Text>
                </Box>
              </Box>
              <Button
                p={"3"}
                cursor={'pointer'}
                width={"auto"}
                display={"flex"}
                bg={'transparent'}
                color='whiteAlpha.800'
                onClick={() =>{
                  // setSize(0);
                  if(mapSize !== 0){
                    console.log(userRef)
                    userRef.current.hidden = true
                    setSize(0)
                  }
                  // console.log(userRef)
                }}
                _hover={{
                  background: 'transparent'
                }}
                _active={{
                  background: 'gray.400',
                  // padding: '3',
                  rounded: 'md',
                  
                }}
              >
                <FiMinimize2 style={{top: '0'}} size={"26px"} color='inherit'></FiMinimize2>
              </Button>
            </Box>
            <Box
              px={"8"}
              py={"6"}
              h={"auto"}
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <Button 
              p={'3'}
              bg={'transparent'}
              rounded={'full'}
              color='whiteAlpha.800'
              _hover={{
                background: 'transparent',
                rounded: 'full'
              }}
              _active={{
                background: 'gray.400',
                rounded: 'full'
              }}
              >
                <AiOutlineStepBackward
                  size={"28px"}
                  style={{ color: "inherit" }}
                ></AiOutlineStepBackward>
              </Button>
              <Button 
              p={'3'}
              bg={'transparent'}
              rounded={'full'}
              color='whiteAlpha.800'
              _hover={{
                background: 'transparent',
                rounded: 'full'
              }}
              _active={{
                background: 'gray.400',
                rounded: 'full'
              }}
              >
              <BsFillPlayFill
                size={"32px"}
                style={{ color: "inherit" }}
              ></BsFillPlayFill>
              </Button>
              <Button 
              p={'3'}
              bg={'transparent'}
              rounded={'full'}
              color='whiteAlpha.800'
              _hover={{
                background: 'transparent',
                rounded: 'full'
              }}
              _active={{
                background: 'gray.400',
                rounded: 'full'
              }}
              >
              <AiOutlineStepForward
                size={"28px"}
                style={{ color: "inherit" }}
              ></AiOutlineStepForward>
              </Button>
            </Box>
          </Box>
          <Flex flexDirection={"column"}>
            <Box width={"100%"} p={"4"}>
              <Text fontSize={"xl"} color={"blue.900"}>
                Widgets
              </Text>
            </Box>
            <Flex flexDirection={"column"}>
              <Flex
                flexDirection={"row"}
                _hover={{
                  background: "white",
                }}
                cursor={"pointer"}
                alignItems={"center"}
                p={"4"}
                fontSize={"16px"}
              >
                <Box
                  borderRadius={"md"}
                  backgroundColor={"gray.300"}
                  p={"3"}
                  marginRight={"10px"}
                >
                  <BsFillPeopleFill
                    size={"20px"}
                    style={{ marginRight: "0px" }}
                    color='blue.900'
                  ></BsFillPeopleFill>
                </Box>
                <Text fontSize={"lg"} fontWeight={"medium"} color={'blue.900'}>
                  Your People
                </Text>
              </Flex>
              <Flex
                _hover={{
                  background: "white",
                }}
                flexDirection={"row"}
                cursor={"pointer"}
                alignItems={"center"}
                p={"4"}
                fontSize={"16px"}
              >
                <Box
                  borderRadius={"md"}
                  backgroundColor={"gray.300"}
                  p={"3"}
                  marginRight={"10px"}
                >
                  <BsSpotify
                    size={"20px"}
                    style={{ marginRight: "0px",  }}
                    
                  ></BsSpotify>
                </Box>
                <Text fontSize={"lg"} color={'blue.900'} fontWeight={"medium"}>
                  Spotify
                </Text>
              </Flex>
              <Flex flexDirection={"row"}></Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default App
