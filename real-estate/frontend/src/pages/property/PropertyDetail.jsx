import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import shallow from 'zustand/shallow';
import { useBaseStore, usePropertyStore, useUserStore } from '../../store/useStore';
import { currencyFormat } from '../../utils/GeneralFunc';

const PropertyDetail = () => {
    const { slug } = useParams();
    const [key, setKey] = useState();
    const getPropertyFromSlug = usePropertyStore(state => state.getPropertyFromSlug);
    const property = usePropertyStore(state => state.property, shallow);
    const setLoading = useBaseStore(state => state.setLoading);
    const user = useUserStore(state => state.user);
    const navigate = useNavigate();
    const handleClick = (url) => {
        const options = "resizable=0,scrollbars=0,status=0,titlebar=0,toolbar=0,width=800px,height=600px";
        window.open(url, "name" + (new Date()), options);
    }
    useEffect(() => {
        const loadProperty = async () => {
            setLoading(true);
            await getPropertyFromSlug(slug);
            setLoading(false);
        }
        loadProperty();
    }, [slug]);
    return (
        <>
            {property != null ? (
                <>
                    <h1><button className='btn btn-primary btn-sm' onClick={() => navigate(-1)}>Go Back</button>

                        {user?.role === 'admin' && (
                            <span style={{paddingLeft: "10px", paddingRight: "10px"}}>
                                <Link to={`/property/update/${property.slug}`} className="btn btn-primary btn-sm">Edit</Link>
                            </span>
                        )}
                        &nbsp; {property.name}</h1>



                    <div className='mb-3' style={{ textAlign: "justify" }}>{property.description}</div>
                    <Tabs defaultActiveKey="type" id="controlled">
                        <Tab eventKey="type" title="Configuration">
                            <div className='mt-3'>
                                <b>Rent/Buy:</b> {property.type.toUpperCase()}<br />
                                <b>BHK:</b> {property.bhk} BHK<br />
                                <b>Floors:</b> {property.floors} Floor(s)<br />
                                <b>Size:</b> {property.plotSize} sqft<br />
                                <b>Ready to move:</b> {property.readyToMove === true ? 'Yes' : 'Under Construction'}
                            </div>
                        </Tab>
                        <Tab eventKey="price" title="Price">
                            <div className='mt-3'>
                                <b>Price:</b> {currencyFormat(property.price)}
                            </div>
                        </Tab>

                        <Tab eventKey="address" title="Address">
                            <div className='mt-3'>
                                <b>Street:</b> {property.address.street}<br />
                                <b>City:</b> {property.address.city}, {property.address.state}<br />
                                <b>Zip:</b> {property.address.zip}<br />
                            </div>
                        </Tab>

                        <Tab eventKey="dealer" title="Dealer Information">
                            <div className='mt-3'>
                                {property.dealer.name}<br />
                                <i>Contact:</i> {property.dealer.contactNumber}<br />
                                <i>Email:</i> {property.dealer.email}<br />
                            </div>
                        </Tab>
                        <Tab eventKey="images" title="Gallery">
                            <div className="row row-cols-5 mt-3">
                                {property?.images?.length > 0 && (
                                    property.images.map(proImage => (
                                        <a key={proImage.large} target="_blank" onClick={() => handleClick(proImage.large)} className="mb-3">
                                            <img className='border border-2 rounded shadow-sm' key={proImage.thumb} src={proImage.thumb} />
                                        </a>

                                    ))
                                )}
                            </div>
                        </Tab>

                    </Tabs>



                </>
            ) : <div>No property detail found</div>}


        </>
    )
}

export default PropertyDetail