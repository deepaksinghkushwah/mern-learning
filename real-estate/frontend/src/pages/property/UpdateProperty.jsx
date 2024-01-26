import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import shallow from 'zustand/shallow';
import { useBaseStore, usePropertyStore } from '../../store/useStore';
import PropertyForm from './PropertyForm';

const UpdateProperty = () => {
    const { slug } = useParams();
    const getPropertyFromSlug = usePropertyStore(state => state.getPropertyFromSlug);
    const updateProperty = usePropertyStore(state => state.updateProperty);
    const [property, setProperty] = useState(null);
    const setLoading = useBaseStore(state => state.setLoading);
    useEffect(() => {
        if(property !== null) {            
        setForm({
            name: property.name,
            description: property.description,
            type: property.type,
            bhk: property.bhk,
            floors: property.floors,
            plotSize: property.plotSize,
            price: property.price,
            readyToMove: property.readyToMove,
        });
        setAddress({
            city: property.address.city,
            state: property.address.state,
            zip: property.address.zip,
            street: property.address.street
        })
        setDealer({
            name: property.dealer.name,
            contactNumber: property.dealer.contactNumber,
            email: property.dealer.email,
        })

    }
    }, [property]);

    useEffect(() => {
        const loadProperty = async () => {
            setLoading(true);
            const item = await getPropertyFromSlug(slug);
            setProperty(item);
            setLoading(false);
        }
        loadProperty();
    }, [slug]);



    const [form, setForm] = useState({
        name: '',
        description: '',
        type: '',
        bhk: '',
        floors: '',
        plotSize: '',
        price: '',
        readyToMove: true        
    });
    const [address, setAddress] = useState({
        street: '',
        city: '',
        state: '',
        zip: '',
    });
    const [dealer, setDealer] = useState({
        name: '',
        contactNumber: '',
        email: '',
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        form.address = address;
        form.dealer = dealer;        
        const call = async () => {
            await updateProperty(property.slug, form);
            toast.success("Property Updated");
            //updateFormData();
            //navigate(`/property/update/${property.slug}`);
        }
        call();

    }

    return (
        <div>
            <h1>Update Property</h1>
            {property !== null ? <PropertyForm 
            dealer={dealer} 
            setDealer = {setDealer}
            address={address} 
            setAddress={setAddress}
            form={form}
            setForm={setForm}
            handleSubmit={handleSubmit} /> : 'Loading property...'}

        </div>
    )
}

export default UpdateProperty