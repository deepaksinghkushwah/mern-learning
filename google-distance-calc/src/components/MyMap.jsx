import { Marker } from '@react-google-maps/api';
import { Polyline } from '@react-google-maps/api';
import { GoogleMap } from '@react-google-maps/api';
import { useJsApiLoader } from '@react-google-maps/api'
import React from 'react'
import { memo } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';
import Calc from './Calc';
const containerStyle = {
    width: '100%',
    height: '50vh'
}

const center = {
    lat: 27.558949868729695,
    lng: 76.61258755638177
}
const MyMap = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    });

    const [markers, setMarkers] = useState([]);
    const [paths, setPaths] = useState([]);
    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map);
    });

    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    });

    const [polylineOptions, setPolylineOptions] = useState({
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: false,
        draggable: true,
        editable: false,
        visible: true,
        radius: 30000,
        zIndex: 1
    });

    const addMarker = (e) => {
        const marker = {
            id: uuid(), name: uuid() + ' Custom', position: {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            }
        };

        setMarkers((stat) => ([
            ...stat,
            marker
        ])
        );
        setPaths(prev => ([
            ...prev,
            { lat: e.latLng.lat(), lng: e.latLng.lng() }
        ]))


        setPolylineOptions(opt => ({
            ...opt,
            visible: true
        }));

    }


    return isLoaded ? (
        <>
            <div className='row'>
                <div className="col">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={5}
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        onClick={addMarker}
                    >
                        {markers.length > 0 ? markers.map(({ id, name, position }) => (
                            <div key={id}>
                                <Marker
                                    /*icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}*/

                                    position={position}>
                                    <></>
                                </Marker>
                                <Polyline key={uuid()} path={paths} options={polylineOptions} />
                            </div>
                        )) : ''}
                    </GoogleMap>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    <Calc markers={markers} />
                </div>

            </div>
        </>
    ) : <></>
}

export default memo(MyMap)