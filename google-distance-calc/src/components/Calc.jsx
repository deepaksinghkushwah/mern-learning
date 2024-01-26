import React from 'react'
import { useState } from 'react';

const Calc = ({ markers }) => {
    const rad = (x) => {
        return x * Math.PI / 180;
    };

    const [showDistance, setShowDistance] = useState(false);
    const [totalDistance, setTotalDistance] = useState(0);

    const getDistance = (p1, p2) => {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = rad(p2.lat - p1.lat);
        var dLong = rad(p2.lng - p1.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(rad(p1.lat)) * Math.cos(rad(p2.lat)) *
            Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d.toFixed(2); // returns the distance in meter
    };
    const calculateTotalDistance = () => {
        if (markers.length > 1) {
            const arr = [];
            for (let i = 1; i < markers.length; i++) {
                //console.log(markers[i-1].position, markers[i].position);
                let p1 = markers[i - 1].position;
                let p2 = markers[i]?.position;
                arr.push(getDistance(p1, p2));
            }
            let total = arr.reduce((a, b) => parseFloat(a) + parseFloat(b), 0);
            setTotalDistance(total.toFixed(2));
            setShowDistance(true);
        }

    }

    const resetTotal = () => {
        window.location.reload();
    }
    return (
        <div className='row'>

            <div className="col-12 mb-3">
                <div className="card">
                    <div className="card-body fs-4">
                        {showDistance === true ? (`Total Distance = ${totalDistance} mtr`) : <>You must place more then 1 marker to calculate distance</>}
                        <div className="fs-6">Note: Distance is calculated by 'Haversine formula'</div>
                    </div>
                </div>

            </div>
            <div className="col-6 text-center"><button className='btn btn-primary' onClick={() => calculateTotalDistance()}>Calculate Distance</button></div>
            <div className="col-6 text-center"><button className='btn btn-danger' onClick={() => resetTotal()}>Clear All</button><br /></div>


        </div>
    )
}

export default Calc