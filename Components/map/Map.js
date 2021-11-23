// import React, {useState, useEffect} from 'react'
// import GoogleMapReact from 'google-map-react';
// import { geolocated } from "react-geolocated";
// import { Button } from 'native-base';

// function Map({ img_src, lat,lng,onMarkerClick}) {
//   return (
//     // <div>Hi</div>
//     <Text>MAP</Text>
//   );
// }
// const Map = ({  data }) => {

//     const [center, setCenter] = useState({lat: 59.955413, lng: 30.337844 });
//     const mapState = {center: center};
//     const [zoom, setZoom] = useState(11);
//     const [lats, setLats] = useState( 0);
//     const [lngs, setLngs] = useState( 0);
//     const [status, setStatus] = useState(null);

//      const getLocation = () => {
//     if (!navigator.geolocation) {
//       setStatus('Geolocation is not supported by your browser');
//     } else {
//       setStatus('Locating...');
//       navigator.geolocation.getCurrentPosition((position) => {
//         setStatus(null);
//         setLats(position.coords.latitude);
//         setLngs(position.coords.longitude);
//       }, () => {
//         setStatus('Unable to retrieve your location');
//       });

//     }
//   }

//   useEffect(()=>{
//       getLocation()
//   }, [ ])

//     const renderMarkers = (map, maps) => {
//     let marker = new maps.Marker({
//    position: {lat: lats, lng: lngs},
//    map,
//    title: `Latitude: ${lats}
//            Longitude: ${lngs}
//           `
//    });
//    return marker;
//  };

//   function handleFindMe(){
//     setCenter({lat:lats, lng:lngs})
//   }
//   let places = [
//       {
//           lat:lats, lng:lngs,
//       }
//   ]
//     return (
//         <>

//             <Button name="btn" onPress={handleFindMe} variant="primary">My location</Button>
//              <p>{status}</p>
//             <div style={{ height: '100vh', width: '100%' }} >
//             <GoogleMapReact
//                   bootstrapURLKeys={{ key: ' ' }}
//                 center={mapState.center}
//                 defaultZoom={zoom}
//                 yesIWantToUseGoogleMapApiInternals={true}
//                 onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps, places)}
//                 >
//                 {places.map((x, id) =>{
//                     return(
//                         <CustomMarker
//                         key={id}
//                         lat= {x.lat}
//                         lng={x.lng}
//                         name= {x.name}
//                          />
//                     )
//                 })}
//             </GoogleMapReact>
//         </div>
//     </>
//     )
// }

// export default Map;
