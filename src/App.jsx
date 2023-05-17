import './App.css';
import "leaflet/dist/leaflet.css";
import {Box, Text, Image, Flex,  } from "@chakra-ui/react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import {BiTimeFive} from 'react-icons/bi';
import { Clock } from './assets/minor-components/clock';
function App() {

  return (
    <>
    <Flex w={'100vw'} bg={'gray.100'} >
    <Box w={'65vw'} h={'100vh'} >
      <MapContainer center={[5.038963, 7.909470]} zoom={13}scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[5.038963, 7.909470]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <Box display={'flex'}   bg={'gray.300'}  backdropFilter={'auto'}  blur={'2px'} padding={'0.4rem'} flexDirection={'row'} position={'absolute'} top={'0'} left={'5vw'}  zIndex={'9999'} width={'fit-content'} >
        <Box display='flex' justifyContent={'center'} alignItems={'center'}>
          <BiTimeFive style={{marginRight: '5px'}}></BiTimeFive>
          <Text><Clock></Clock></Text>
        </Box>
      </Box>
    </Box> 
    <Flex flexDirection={'column'} w={'35vw'} borderLeftWidth={'1px'} borderColor={'gray.800'}>

    </Flex>
    </Flex>
        
    </>
  );
}

export default App
