import './App.css';
import "leaflet/dist/leaflet.css"
import {Box, Text, Image, Flex,  } from "@chakra-ui/react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
function App() {

  return (
    <>


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
        
    </>
  );
}

export default App
